import GamesHeader from "@/components/games/GamesHeader";
import { GenreCard } from "@/components/genres/GenreCard";
import { getGenres } from "@/lib/rawg";

export default async function GenresPage() {
  const genres = await getGenres();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <GamesHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-4xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              Explore by genre
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Browse the genres shaping today’s games
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              Discover your favorite playstyles, from action and adventure to
              strategy and simulation.
            </p>
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {genres.map((genre) => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </div>
      </main>
    </div>
  );
}
