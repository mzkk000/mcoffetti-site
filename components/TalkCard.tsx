type Talk = {
  id: string;
  title: string;
  event: string;
  location: string;
  year: number;
  type: string;
  links?: {
    video?: string;
    slides?: string;
  };
};

export function TalkCard({ talk }: { talk: Talk }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 shadow-sm">
      <h2 className="text-sm font-semibold">{talk.title}</h2>
      <p className="mt-1 text-xs text-slate-400">
        {talk.event} · {talk.location} · {talk.year}
      </p>
      <p className="mt-2 text-xs uppercase tracking-wide text-sky-400">
        {talk.type}
      </p>
      <div className="mt-3 flex flex-wrap gap-3 text-xs">
        {talk.links?.video && (
          <a
            href={talk.links.video}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-sky-500 px-3 py-1 text-sky-300 hover:bg-sky-500/10"
          >
            Video
          </a>
        )}
        {talk.links?.slides && (
          <a
            href={talk.links.slides}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-600 px-3 py-1 text-slate-200 hover:bg-slate-700"
          >
            Slides
          </a>
        )}
      </div>
    </article>
  );
}
