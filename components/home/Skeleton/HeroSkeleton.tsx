export function HeroSkeleton() {
  return (
    <section className="overflow-hidden rounded-4xl border border-slate-200/70 bg-slate-100 p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/80 md:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="h-8 w-40 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-3">
            <div className="h-10 w-3/4 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="h-5 w-full animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="h-5 w-2/3 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex gap-3">
            <div className="h-11 w-32 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="h-11 w-32 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="flex gap-3">
            <div className="h-8 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="h-8 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>

        <div className="relative h-80 overflow-hidden rounded-3xl bg-slate-200 animate-pulse dark:bg-slate-800 md:h-105" />
      </div>
    </section>
  );
}
