import Image from "next/image";
import Link from "next/link";
import type { RawgGenre, RawgPlatform } from "@/lib/rawg";

interface DiscoveryCardProps {
  item: RawgGenre | RawgPlatform;
  href: string;
  description: string;
}

export function DiscoveryCard({
  item,
  href,
  description,
}: DiscoveryCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/70">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image_background ?? "/placeholder-game.svg"}
            alt={item.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-950 transition group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
              {item.name}
            </h3>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              {item.games_count}
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}