import Image from "next/image";
import Link from "next/link";
import type { RawgGame } from "@/lib/rawg";

interface GameCardProps {
  game: RawgGame;
}

export function GameCard({ game }: GameCardProps) {
  const imageSrc = game.background_image ?? "/placeholder-game.svg";
  return (
    <Link href={`/game/${game.id}`} className="group block">
      <article className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_-20px_rgba(15,23,42,0.35)] dark:border-slate-800/80 dark:bg-slate-900/70">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={game.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm dark:bg-slate-950/90 dark:text-slate-100">
            ★ {game.rating.toFixed(1)}
          </div>
        </div>

        <div className="space-y-3 p-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 transition group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
              {game.name}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {game.released ? game.released : "Coming soon"}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {game.genres.slice(0, 2).map((genre) => (
              <span
                key={genre.id}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
