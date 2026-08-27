import Link from "next/link";

interface GamesPaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: Record<string, string | undefined>;
  basePath?: string;
}

export function GamesPagination({
  currentPage,
  totalPages,
  searchParams,
  basePath = "/games",
}: GamesPaginationProps) {
  const createPageHref = (page: number) => {
    const params = new URLSearchParams();

    if (searchParams.genre) {
      params.set("genre", searchParams.genre);
    }

    if (searchParams.platform) {
      params.set("platform", searchParams.platform);
    }

    if (searchParams.rating) {
      params.set("rating", searchParams.rating);
    }

    params.set("page", String(page));
    return `${basePath}?${params.toString()}`;
  };

  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-2">
        <Link
          href={createPageHref(Math.max(1, currentPage - 1))}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          aria-disabled={currentPage === 1}
        >
          Previous
        </Link>

        <div className="rounded-full bg-slate-950 px-3 py-2 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-950">
          {currentPage}
        </div>
        <Link
          href={createPageHref(currentPage + 1)}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          aria-disabled={currentPage === totalPages}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
