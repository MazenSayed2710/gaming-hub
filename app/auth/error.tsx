"use client";

import Link from "next/link";

export default function AuthError() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16 text-center text-slate-900 dark:text-slate-100">
      <div className="max-w-lg space-y-8 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600 dark:text-red-400">
            Authentication error
          </p>
          <h1 className="mt-4 text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            We encountered an issue with your authentication. Please try again
            or contact support.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/auth/login"
            className="inline-flex rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Try signing in again
          </Link>
          <Link
            href="/"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
