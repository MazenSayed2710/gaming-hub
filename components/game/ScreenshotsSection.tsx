import Image from "next/image";

interface Screenshot {
  id: number;
  image: string;
}

interface Props {
  screenshots: Screenshot[];
}

export default function ScreenshotsSection({ screenshots }: Props) {
  if (!screenshots || screenshots.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Screenshots</h2>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {screenshots.map((s) => (
          <div key={s.id} className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/70">
            <div className="relative h-48">
              <Image src={s.image} alt={`screenshot-${s.id}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
