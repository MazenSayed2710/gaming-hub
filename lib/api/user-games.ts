import type { UserGameCollection } from "@/lib/user-games";

export interface CollectionState {
  favorites: number[];
  wishlist: number[];
}

export async function getSavedGames(
  signal?: AbortSignal,
): Promise<CollectionState> {
  const response = await fetch("/api/user-games", { signal });
  if (!response.ok) throw new Error("Unable to load saved games");
  return response.json() as Promise<CollectionState>;
}

export async function updateSavedGames(
  collection: UserGameCollection,
  gameId: number,
  action: "add" | "remove",
): Promise<number[]> {
  const response = await fetch("/api/user-games", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ collection, gameId, action }),
  });
  const data = (await response.json()) as { ids?: number[]; error?: string };
  if (!response.ok || !data.ids) {
    throw new Error(data.error || "Unable to update saved games");
  }
  return data.ids;
}
