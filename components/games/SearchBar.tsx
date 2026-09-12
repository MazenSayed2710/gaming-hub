"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useClickOutside } from "@/hooks/useClickOutside";
import type { RawgGame } from "@/lib/rawg";
import { searchGames } from "@/lib/api/search";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<RawgGame[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { ref, isOpen, setIsOpen } = useClickOutside<HTMLDivElement>();
  useEffect(() => {
    if (!query.trim()) return;

    const controller = new AbortController();
    const runSearch = setTimeout(async () => {
      setLoading(true);
      setError(null);

      try {
        const games = await searchGames(query, controller.signal);
        if (!controller.signal.aborted) setResults(games);
      } catch {
        if (controller.signal.aborted) return;
        setError("Unable to load results right now.");
        setResults([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(runSearch);
      controller.abort();
    };
  }, [query]);

  const hasResults = results.length > 0;

  return (
    <div ref={ref} className={`relative w-full max-w-sm ${className ?? ""}`}>
      <input
        type="text"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setIsOpen(true);

          if (!event.target.value.trim()) {
            setResults([]);
            setError(null);
            setLoading(false);
          }
        }}
        onFocus={() => setIsOpen(true)}
        placeholder="Search games..."
        className="w-full rounded-xl border border-slate-200 bg-slate-100/70 px-4 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-500 dark:focus:bg-slate-900 dark:focus:ring-indigo-500/10"
      />

      {isOpen && (query.trim() || loading || error || hasResults) ? (
        <div className="absolute left-0 top-full z-30 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
          {loading ? (
            <div className="flex items-center justify-center gap-2 px-4 py-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
              Searching...
            </div>
          ) : null}

          {!loading && error && !hasResults ? (
            <div className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">
              {error}
            </div>
          ) : null}

          {!loading && !error && !hasResults && query.trim() ? (
            <div className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">
              No games found.
            </div>
          ) : null}

          {!loading && hasResults ? (
            <div className="max-h-80 overflow-y-auto ">
              {results.map((game) => (
                <Link
                  key={game.id}
                  href={`/game/${game.id}`}
                  onClick={() => {
                    setQuery("");
                    setResults([]);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 border-b border-slate-200 px-3 py-3 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
                >
                  <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={game.background_image ?? "/placeholder-game.svg"}
                      alt={game.name}
                      fill
                      sizes="80px"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {game.name}
                    </p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>★ {game.rating.toFixed(1)}</span>
                      <span>
                        {game.released ? game.released : "Coming soon"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
