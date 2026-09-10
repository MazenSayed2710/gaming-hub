"use client";

export default function WishlistError({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold">
        We couldn&apos;t load your wishlist.
      </h1>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white"
      >
        Retry
      </button>
    </main>
  );
}
