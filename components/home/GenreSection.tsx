import type { RawgGenre } from "@/lib/rawg";

interface GenreSectionProps {
  genres: RawgGenre[];
}

export function GenreSection({ genres }: GenreSectionProps) {
  return (
    <section id="genres" className="space-y-4">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
            Popular genres
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Explore the most played categories across the platform.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {genres.map((genre) => (
          <article
            key={genre.id}
            className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/70"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-100">
                {genre.name}
              </h3>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                {genre.games_count}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Discover standout titles in {genre.name.toLowerCase()}.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
