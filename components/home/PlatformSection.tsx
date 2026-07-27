import type { RawgPlatform } from "@/lib/rawg";

interface PlatformSectionProps {
  platforms: RawgPlatform[];
}

export function PlatformSection({ platforms }: PlatformSectionProps) {
  return (
    <section className="space-y-4">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
            Popular platforms
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Browse the devices and ecosystems that define modern gaming.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {platforms.map((platform) => (
          <article
            key={platform.id}
            className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/70"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-100">
                {platform.name}
              </h3>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                {platform.games_count}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Play across {platform.name.toLowerCase()} favorites and classics.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
