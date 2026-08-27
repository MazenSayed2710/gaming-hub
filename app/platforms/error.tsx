"use client";

import Link from "next/link";

export default function PlatformsError({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16 text-center text-slate-900 dark:text-slate-100">
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
          Something went wrong
        </p>
        <h1 className="mt-4 text-3xl font-semibold">We couldn&apos;t load the platforms.</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Please try again or return to the games list.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button type="button" onClick={reset} className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white">
            Retry
          </button>
          <Link href="/games" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold dark:border-slate-700">
            Back to games
          </Link>
        </div>
      </div>
    </main>
  );
}