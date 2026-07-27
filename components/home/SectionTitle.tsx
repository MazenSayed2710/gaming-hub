import Link from "next/link";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
}

export function SectionTitle({
  title,
  subtitle,
  viewAllLink,
}: SectionTitleProps) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        ) : null}
      </div>

      {viewAllLink ? (
        <Link
          href={viewAllLink}
          className="text-sm font-medium text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
        >
          View all
        </Link>
      ) : null}
    </div>
  );
}
