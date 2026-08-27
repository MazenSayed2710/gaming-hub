"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GameDetailError({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 dark:text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8 px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200/70 bg-white/90 px-8 py-12 text-center shadow-xl backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            Something went wrong
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
            Unable to load game details
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
            {error?.message ||
              "An unexpected issue occurred while loading this page."}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Retry
            </button>
            <Link
              href="/games"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Back to games
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
