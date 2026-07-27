export function SectionSkeleton() {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <div className="h-7 w-40 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-56 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70"
          >
            <div className="h-40 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800" />
            <div className="mt-4 space-y-3">
              <div className="h-5 w-3/4 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-full animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
