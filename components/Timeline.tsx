type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights?: string[];
};

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative border-l border-slate-800">
      {items.map((item, idx) => (
        <li key={idx} className="mb-8 ml-4">
          <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-sky-500 bg-slate-950" />
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">
              {item.role} ·{" "}
              <span className="text-slate-300">{item.company}</span>
            </h2>
            <p className="text-xs text-slate-400">
              {item.period} · {item.location}
            </p>
            {item.highlights && (
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-200">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
