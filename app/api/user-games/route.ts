import { NextResponse } from "next/server";
import {
  getUserCollectionState,
  updateUserCollection,
  type UserGameCollection,
} from "@/lib/user-games";

function isCollection(value: unknown): value is UserGameCollection {
  return value === "favorites" || value === "wishlist";
}

export async function GET() {
  try {
    const state = await getUserCollectionState();
    if (!state) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(state);
  } catch {
    return NextResponse.json(
      { error: "Unable to load your games" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      collection?: unknown;
      gameId?: unknown;
      action?: unknown;
    };

    const collection = body.collection;
    const gameId = Number(body.gameId);
    const action = body.action;
    if (
      !isCollection(collection) ||
      !Number.isInteger(gameId) ||
      gameId <= 0 ||
      (action !== "add" && action !== "remove")
    ) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const result = await updateUserCollection(collection, gameId, action);
    if (!result) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Unable to update your games" },
      { status: 500 },
    );
  }
}
