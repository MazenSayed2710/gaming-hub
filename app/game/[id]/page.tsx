import GamesHeader from "@/components/games/GamesHeader";
import Image from "next/image";
import About from "@/components/game/About";
import ScreenshotsSection from "@/components/game/ScreenshotsSection";
import SimilarGamesSection from "@/components/game/SimilarGamesSection";
import { getGameById, getScreenshots, getGames } from "@/lib/rawg";

interface GameDetailPageProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: GameDetailPageProps) => {
  const { id } = await params;
  const game = await getGameById(id);
  return {
    title: game.name,
    description: game.description_raw || "",
  };
};

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { id } = await params;

  const game = await getGameById(id);
  const [screenshotsResult, similarResult] = await Promise.all([
    getScreenshots(id).catch(() => []),
    (async () => {
      const primaryGenre = game.genres?.[0]?.id;
      if (!primaryGenre) return { games: [] } as const;
      return getGames({ page: 1, genre: String(primaryGenre) }).catch(() => ({
        games: [],
      }));
    })(),
  ]);

  const similarGames = (similarResult?.games || [])
    .filter((g) => g.id !== game.id)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <GamesHeader />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-4xl border border-slate-200/70 bg-white/80 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
          <div className="relative h-72 sm:h-96">
            <Image
              src={game.background_image ?? "/placeholder-game.svg"}
              alt={game.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              unoptimized
            />
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                ★ {game.rating.toFixed(1)}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {game.released ?? "Coming soon"}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {game.added} players tracked
              </span>
            </div>

            <About text={game.description_raw ?? ""} />

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Genres</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {game.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Platforms</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {game.platforms.map((entry) => (
                    <span
                      key={entry.platform.id}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {entry.platform.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {game.website ? (
              <a
                href={game.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950"
              >
                Visit website
              </a>
            ) : null}
          </div>
        </div>

        <ScreenshotsSection screenshots={screenshotsResult} />

        <SimilarGamesSection games={similarGames} />
      </main>
    </div>
  );
}
