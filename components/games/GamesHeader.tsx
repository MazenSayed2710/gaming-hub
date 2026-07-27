import Link from "next/link";
import { ThemeToggle } from "@/components/home/ThemeToggle";
export default function GamesHeader() {
  return (
    <header className="border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            Browse games
          </p>
          <h1 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
            Discover your next favorite title
          </h1>
        </div>
        <div>
          <ThemeToggle />
          <Link
            href="/"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 ml-2"
          >
            Back home
          </Link>
        </div>
      </div>
    </header>
  );
}
