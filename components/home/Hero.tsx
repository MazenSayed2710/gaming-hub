import Image from "next/image";
import Link from "next/link";
import type { RawgGame } from "@/lib/rawg";

interface HeroProps {
  games: RawgGame[];
}

export function Hero({ games }: HeroProps) {
  const featuredGame = games[0];
  if (!featuredGame) {
    return null;
  }

  return (
    <section className="relative overflow-hidden rounded-4xl border border-slate-200/70 bg-linear-to-br from-indigo-600 via-violet-600 to-slate-950 p-6 shadow-[0_30px_90px_-30px_rgba(79,70,229,0.65)] dark:border-slate-800/80 md:p-8 lg:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_40%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur">
            Featured this week
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {featuredGame.name}
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Discover the biggest hits, fresh releases, and top-rated
              experiences in one polished gaming hub.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/games"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Explore games
            </Link>
            <Link
              href="/genres"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Browse genres
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-200">
            <span className="rounded-full bg-white/10 px-3 py-1">
              ⭐ {featuredGame.rating.toFixed(1)}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              📅 {featuredGame.released ?? "TBA"}
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              🔥 {featuredGame.added} adds
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-slate-950/20 p-2 shadow-2xl">
          <div className="relative h-80 overflow-hidden rounded-[1.25rem] md:h-105">
            <Image
              src={featuredGame.background_image ?? "/placeholder-game.svg"}
              alt={featuredGame.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
