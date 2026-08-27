import { GameCard } from "@/components/home/GameCard";
import { GamesFilter } from "@/components/games/GamesFilter";
import { GamesPagination } from "@/components/games/GamesPagination";
import { getGames, getGenres, getPlatforms } from "@/lib/rawg";
import CatalogHeader from "@/components/shared/CatalogHeader";

interface GamesPageProps {
  searchParams?: Promise<Record<string, string | undefined>>;
}

export default async function GamesPage({ searchParams }: GamesPageProps) {
  const params = (await searchParams) ?? {};
  const page = Number(params.page ?? "1");
  const genre = params.genre ?? "";
  const platform = params.platform ?? "";
  const rating = params.rating ?? "";

  const [gamesResult, genres, platforms] = await Promise.all([
    getGames({ page, genre, platform, minRating: rating }),
    getGenres(),
    getPlatforms(),
  ]);

  const totalPages = Math.max(1, Math.ceil(gamesResult.count / 12));

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <CatalogHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <GamesFilter
          genres={genres}
          platforms={platforms}
          currentGenre={genre}
          currentPlatform={platform}
          currentRating={rating}
          page={page}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {gamesResult.games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <GamesPagination
          currentPage={page}
          totalPages={totalPages}
          searchParams={params}
          basePath={`/games`}
        />
      </main>
    </div>
  );
}
