import { GameCard } from "@/components/home/GameCard";
import { GamesFilter } from "@/components/games/GamesFilter";
import { GamesPagination } from "@/components/games/GamesPagination";
import CatalogHeader from "@/components/shared/CatalogHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import { getGames, getGenres, getPlatforms } from "@/lib/rawg";
import { notFound } from "next/navigation";

interface PlatformDetailPageProps {
  params: Promise<{ id: string }>;
  searchParams?: Promise<Record<string, string | undefined>>;
}

export default async function PlatformDetailPage({
  params,
  searchParams,
}: PlatformDetailPageProps) {
  const { id } = await params;
  const paramsValue = (await searchParams) ?? {};
  const page = Number(paramsValue.page ?? "1");
  const genre = paramsValue.genre ?? "";
  const rating = paramsValue.rating ?? "";
  const platformId = Number(id);

  const [platforms, genres, gamesResult] = await Promise.all([
    getPlatforms(),
    getGenres(),
    getGames({ page, platform: id, genre, minRating: rating }),
  ]);

  const platform = platforms.find((item) => item.id === platformId);
  if (!platform) {
    notFound();
  }

  const totalPages = Math.max(1, Math.ceil(gamesResult.count / 12));
  const basePath = `/platforms/${id}`;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <CatalogHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Platform spotlight"
          title={platform.name}
          description={`Browse ${platform.games_count} games available on ${platform.name}, then refine the list by genre or rating.`}
        />

        <GamesFilter
          genres={genres}
          platforms={platforms}
          currentGenre={genre}
          currentPlatform={id}
          currentRating={rating}
          page={page}
          showPlatformFilter={false}
          basePath={basePath}
        />

        {gamesResult.games.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400">
            No games found for this platform right now.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {gamesResult.games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}

        <GamesPagination
          currentPage={page}
          totalPages={totalPages}
          searchParams={{ ...paramsValue, platform: id }}
          basePath={basePath}
        />
      </main>
    </div>
  );
}
