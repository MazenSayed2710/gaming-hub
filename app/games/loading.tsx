export default function GamesLoading() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="h-20 animate-pulse rounded-3xl bg-slate-200/80 dark:bg-slate-800/80" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70"
            >
              <div className="h-48 animate-pulse rounded-[1.25rem] bg-slate-200 dark:bg-slate-800" />
              <div className="mt-4 space-y-3">
                <div className="h-5 w-3/4 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-full animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
