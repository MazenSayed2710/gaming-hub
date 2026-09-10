export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 dark:text-slate-100">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Profile Card */}
          <div className="md:col-span-2">
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-16 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
                <div className="flex-1 space-y-2">
                  <div className="h-6 w-32 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
                  <div className="h-4 w-48 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="h-4 w-24 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
                  <div className="mt-2 h-10 w-full animate-pulse rounded-lg bg-slate-100 dark:bg-slate-900" />
                </div>

                <div>
                  <div className="h-4 w-24 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
                  <div className="mt-2 h-10 w-full animate-pulse rounded-lg bg-slate-100 dark:bg-slate-900" />
                </div>

                <div>
                  <div className="h-4 w-32 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
                  <div className="mt-2 h-10 w-full animate-pulse rounded-lg bg-slate-100 dark:bg-slate-900" />
                </div>
              </div>
            </div>
          </div>

          {/* Actions Card */}
          <div>
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
              <div className="mb-6 h-6 w-24 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />

              <div className="space-y-3">
                <div className="h-12 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
              </div>

              <div className="mt-6 space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/50">
                <div className="h-4 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-3/4 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
