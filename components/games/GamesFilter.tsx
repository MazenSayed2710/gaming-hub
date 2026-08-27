"use client";
import Link from "next/link";
import type { RawgGenre, RawgPlatform } from "@/lib/rawg";
import { useRouter } from "next/navigation";

interface GamesFilterProps {
  genres: RawgGenre[];
  platforms: RawgPlatform[];
  currentGenre: string;
  currentPlatform: string;
  currentRating: string;
  page: number;
  showGenreFilter?: boolean;
  showPlatformFilter?: boolean;
  showRatingFilter?: boolean;
  basePath?: string;
}

function buildHref({
  genre,
  platform,
  rating,
  page,
  basePath = "/games",
}: {
  genre: string;
  platform: string;
  rating: string;
  page: number;
  basePath?: string;
}) {
  const params = new URLSearchParams();
  params.set("page", String(page));

  if (genre) {
    params.set("genre", genre);
  }

  if (platform) {
    params.set("platform", platform);
  }

  if (rating) {
    params.set("rating", rating);
  }

  return `${basePath}?${params.toString()}`;
}

export function GamesFilter({
  genres,
  platforms,
  currentGenre,
  currentPlatform,
  currentRating,
  showGenreFilter = true,
  showPlatformFilter = true,
  showRatingFilter = true,
  basePath = "/games",
}: GamesFilterProps) {
  const router = useRouter();
  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${basePath}?${params.toString()}`);
  };

  return (
    <div
      className={`grid gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70 ${showGenreFilter && showPlatformFilter && showRatingFilter ? "lg:grid-cols-[1fr_1fr_1fr_auto]" : "lg:grid-cols-[1fr_1fr_auto]"}`}
    >
      {showGenreFilter ? (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Genre
          </label>
          <select
            value={currentGenre}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950"
            onChange={(e) => handleFilterChange("genre", e.target.value)}
          >
            <option value="">All genres</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.slug}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {showPlatformFilter ? (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Platform
          </label>
          <select
            value={currentPlatform}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950"
            onChange={(e) => handleFilterChange("platform", e.target.value)}
          >
            <option value="">All platforms</option>
            {platforms.map((platform) => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {showRatingFilter ? (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            Minimum rating
          </label>
          <select
            value={currentRating}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950"
            onChange={(e) => handleFilterChange("rating", e.target.value)}
          >
            <option value="">Any rating</option>
            <option value="4">4.0+</option>
            <option value="4.5">4.5+</option>
          </select>
        </div>
      ) : null}

      <div className="flex items-end">
        <Link
          href={buildHref({
            genre: "",
            platform: "",
            rating: "",
            page: 1,
            basePath,
          })}
          className="w-full rounded-2xl bg-slate-950 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950"
        >
          Reset
        </Link>
      </div>
    </div>
  );
}
