export default function SignupLoading() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.16),transparent_40%)] text-slate-900 dark:text-slate-100">
      <main className="mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-4 text-center">
            <div className="mx-auto h-8 w-32 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="mx-auto h-10 w-64 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="mx-auto h-6 w-80 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
            <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="h-12 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="h-6 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </main>
    </div>
  );
}
