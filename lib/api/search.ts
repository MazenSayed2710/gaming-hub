import type { RawgGame } from "@/lib/rawg";

export async function searchGames(
  query: string,
  signal?: AbortSignal,
): Promise<RawgGame[]> {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return [];

  const response = await fetch(
    `/api/search?query=${encodeURIComponent(trimmedQuery)}`,
    { signal },
  );
  if (!response.ok) throw new Error("Search failed");

  const data = (await response.json()) as { games?: RawgGame[] };
  return data.games ?? [];
}
