import "server-only";

import {
  Account,
  Client,
  ID,
  Query,
  TablesDB,
  type Models,
} from "node-appwrite";
import { cookies } from "next/headers";
import type { RawgGameDetails } from "@/lib/rawg";
import { getGameById } from "@/lib/rawg";

export type UserGameCollection = "favorites" | "wishlist";

interface UserGamesRow extends Models.Row {
  username: string;
  favorites?: unknown;
  wishlist?: unknown;
}

const projectId = process.env.NEXT_APPWRITE_PROJECT_ID!;
const endpoint = process.env.NEXT_APPWRITE_ENDPOINT!;
const databaseId = process.env.DATABASE_ID!;
const tableId = process.env.TABLE_ID!;

function createAppwriteClient() {
  return new Client().setEndpoint(endpoint).setProject(projectId);
}

function getDatabaseClient() {
  return new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(process.env.APPWRITE_API_KEY!);
}

async function getCurrentUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get(`appwrite-session-${projectId}`)?.value;

  if (!session) {
    return null;
  }

  try {
    return await new Account(createAppwriteClient().setSession(session)).get();
  } catch {
    return null;
  }
}

function normalizeIds(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((id) => Number(id))
    .filter((id) => Number.isInteger(id) && id > 0);
}

async function getOrCreateUserRow() {
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }

  const username = user.name || user.email;
  const tables = new TablesDB(getDatabaseClient());
  const result = await tables.listRows<UserGamesRow>({
    databaseId,
    tableId,
    queries: [Query.equal("username", username)],
  });

  if (result.rows[0]) {
    return { row: result.rows[0], tables };
  }

  const row = await tables.createRow<UserGamesRow>({
    databaseId,
    tableId,
    rowId: ID.unique(),
    data: {
      username,
      favorites: [],
      wishlist: [],
    },
  });

  return { row, tables };
}

export async function getUserCollection(collection: UserGameCollection) {
  const userRow = await getOrCreateUserRow();
  if (!userRow) {
    return null;
  }

  const ids = normalizeIds(userRow.row[collection]);
  const games = await Promise.all(
    ids.map((id) => getGameById(String(id)).catch(() => null)),
  );

  return {
    games: games.filter((game): game is RawgGameDetails => game !== null),
    ids,
  };
}

export async function updateUserCollection(
  collection: UserGameCollection,
  gameId: number,
  action: "add" | "remove",
) {
  const userRow = await getOrCreateUserRow();
  const currentIds = normalizeIds(userRow?.row[collection]);
  const nextIds =
    action === "add"
      ? Array.from(new Set([...currentIds, gameId]))
      : currentIds.filter((id) => id !== gameId);

  if (!userRow) {
    return null;
  }
  try {
    await userRow.tables.updateRow<UserGamesRow>({
      databaseId,
      tableId,
      rowId: userRow.row.$id,
      data: { [collection]: nextIds },
    });
  } catch (error) {
    console.error("UPDATE ROW ERROR:", error);
    throw error;
  }
  return { ids: nextIds };
}

export async function getUserCollectionState() {
  const userRow = await getOrCreateUserRow();
  if (!userRow) {
    return null;
  }

  return {
    favorites: normalizeIds(userRow.row.favorites),
    wishlist: normalizeIds(userRow.row.wishlist),
  };
}
