const RAWG_BASE_URL = "https://api.rawg.io/api";

export interface RawgGame {
  id: number;
  name: string;
  background_image: string | null;
  rating: number;
  released: string | null;
  added: number;
  genres: Array<{ id: number; name: string }>;
  platforms: Array<{ platform: { id: number; name: string } }>;
}

export interface RawgGameDetails extends RawgGame {
  description_raw: string;
  metacritic: number | null;
  parent_platforms: Array<{ platform: { id: number; name: string } }>;
  website: string | null;
}

export interface RawgGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string | null;
}

export interface RawgPlatform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string | null;
}

interface RawgListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

interface GamesQueryParams {
  page?: number;
  genre?: string;
  platform?: string;
  minRating?: string;
}

export interface GamesListResult {
  games: RawgGame[];
  count: number;
  next: string | null;
  previous: string | null;
}

async function fetchRawg<T>(
  path: string,
  params?: Record<string, string | number | undefined>,
) {
  const apiKey = process.env.RAWG_API_KEY;

  if (!apiKey) {
    throw new Error("RAWG_API_KEY is not defined");
  }

  const url = new URL(`${RAWG_BASE_URL}${path}`);
  url.searchParams.set("key", apiKey);

  Object.entries(params ?? {}).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(url.toString(), {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`RAWG API request failed with ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getFeaturedGames(): Promise<RawgGame[]> {
  const data = await fetchRawg<RawgListResponse<RawgGame>>("/games", {
    ordering: "-added",
    page_size: 5,
  });

  return data.results;
}

export async function getTrendingGames(): Promise<RawgGame[]> {
  const data = await fetchRawg<RawgListResponse<RawgGame>>("/games", {
    ordering: "-added",
    page_size: 10,
  });

  return data.results;
}

export async function getTopRatedGames(): Promise<RawgGame[]> {
  const data = await fetchRawg<RawgListResponse<RawgGame>>("/games", {
    ordering: "-rating",
    page_size: 10,
  });

  return data.results;
}

export async function getNewReleases(): Promise<RawgGame[]> {
  const data = await fetchRawg<RawgListResponse<RawgGame>>("/games", {
    ordering: "-released",
    page_size: 10,
  });

  return data.results;
}

export async function getGenres(): Promise<RawgGenre[]> {
  const data = await fetchRawg<RawgListResponse<RawgGenre>>("/genres", {
    page_size: 12,
  });

  return data.results;
}

export async function getPlatforms(): Promise<RawgPlatform[]> {
  const data = await fetchRawg<RawgListResponse<RawgPlatform>>("/platforms", {
    page_size: 12,
  });

  return data.results;
}

export async function getGames(
  query: GamesQueryParams = {},
): Promise<GamesListResult> {
  const page = query.page ?? 1;
  const minRating = query.minRating ? Number(query.minRating) : undefined;

  const params: Record<string, string | number | undefined> = {
    page,
    page_size: 12,
    ordering: "-added",
  };

  if (query.genre) {
    params.genres = query.genre;
  }

  if (query.platform) {
    params.platforms = query.platform;
  }

  const data = await fetchRawg<RawgListResponse<RawgGame>>("/games", params);
  const filteredGames = data.results.filter((game) => {
    if (minRating && game.rating < minRating) {
      return false;
    }

    return true;
  });

  return {
    games: filteredGames,
    count: data.count,
    next: data.next,
    previous: data.previous,
  };
}

export async function getGameById(id: string): Promise<RawgGameDetails> {
  return fetchRawg<RawgGameDetails>(`/games/${id}`);
}

export async function searchGames(query: string): Promise<RawgGame[]> {
  if (!query.trim()) {
    return [];
  }
  console.log("Searching games with query:", query);

  const data = await fetchRawg<RawgListResponse<RawgGame>>("/games", {
    search: query.trim(),
    page_size: 6,
    ordering: "-added",
  });

  return data.results;
}

export interface RawgScreenshot {
  id: number;
  image: string;
}

export async function getScreenshots(id: string): Promise<RawgScreenshot[]> {
  const data = await fetchRawg<{ results: RawgScreenshot[] }>(
    `/games/${id}/screenshots`,
  );
  return data.results;
}
