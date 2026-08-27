import { GameCard } from "@/components/home/GameCard";
import GamesHeader from "@/components/games/GamesHeader";
import { GamesFilter } from "@/components/games/GamesFilter";
import { GamesPagination } from "@/components/games/GamesPagination";
import { getGames, getGenres, getPlatforms } from "@/lib/rawg";
import { notFound } from "next/navigation";

interface GenreDetailPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | undefined>>;
}

export default async function GenreDetailPage({
  params,
  searchParams,
}: GenreDetailPageProps) {
  const { slug } = await params;
  const paramsValue = (await searchParams) ?? {};
  const page = Number(paramsValue.page ?? "1");
  const platform = paramsValue.platform ?? "";
  const rating = paramsValue.rating ?? "";

  const [genres, platforms, gamesResult] = await Promise.all([
    getGenres(),
    getPlatforms(),
    getGames({ page, genre: slug, platform, minRating: rating }),
  ]);

  const genre = genres.find((item) => item.slug === slug);
  if (!genre) {
    notFound();
  }

  const totalPages = Math.max(1, Math.ceil(gamesResult.count / 12));

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <GamesHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-4xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              Genre spotlight
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {genre.name}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              Browse {genre.games_count} titles in this genre and refine the
              list by platform or rating.
            </p>
          </div>
        </section>

        <GamesFilter
          genres={genres}
          platforms={platforms}
          currentGenre={slug}
          currentPlatform={platform}
          currentRating={rating}
          page={page}
          showGenreFilter={false}
          showPlatformFilter
          showRatingFilter
          basePath={`/genres/${slug}`}
        />

        {gamesResult.games.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400">
            No games found for this genre right now.
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
          searchParams={{ ...paramsValue, genre: slug }}
        />
      </main>
    </div>
  );
}
