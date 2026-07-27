export default function GameLoading() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="h-20 animate-pulse rounded-[1.5rem] bg-slate-200 dark:bg-slate-800" />

        <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
          <div className="h-72 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <div className="h-6 w-40 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="mt-3 h-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            </div>

            <div>
              <div className="h-6 w-28 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="mt-3 grid gap-3">
                <div className="h-10 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-10 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
              <div className="h-48 animate-pulse rounded-[1.25rem] bg-slate-200 dark:bg-slate-800" />
              <div className="mt-4 space-y-3">
                <div className="h-5 w-3/4 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-full animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
