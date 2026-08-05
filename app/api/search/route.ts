import { NextResponse } from "next/server";
import { searchGames } from "@/lib/rawg";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.trim();

  if (!query) {
    return NextResponse.json({ games: [] });
  }

  try {
    const games = await searchGames(query);
    return NextResponse.json({ games });
  } catch {
    return NextResponse.json({ games: [] }, { status: 500 });
  }
}
