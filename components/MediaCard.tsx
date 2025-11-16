type MediaItem = {
  id: string;
  title: string;
  outlet: string;
  year: number;
  type: string;
  url: string;
};

export function MediaCard({ item }: { item: MediaItem }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 shadow-sm">
      <h2 className="text-sm font-semibold">{item.title}</h2>
      <p className="mt-1 text-xs text-slate-400">
        {item.outlet} · {item.year}
      </p>
      <p className="mt-2 text-xs uppercase tracking-wide text-sky-400">
        {item.type}
      </p>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-xs text-sky-300 underline underline-offset-2"
      >
        Read / watch
      </a>
    </article>
  );
}
