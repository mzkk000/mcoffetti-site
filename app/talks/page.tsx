import { Container } from "@/components/Container";
import { TalkCard } from "@/components/TalkCard";
import talksData from "@/content/talks.json";

export default function TalksPage() {
  const list = (talksData as any).talks as any[];
  return (
    <Container>
      <h1 className="text-xl font-semibold">Talks & Public Speaking</h1>
      <p className="mt-2 text-sm text-slate-300 max-w-2xl">
        A selection of talks and workshops on OSINT, DFIR, cyber resilience
        and operating systems hardening.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {list.map((t) => (
          <TalkCard key={t.id} talk={t} />
        ))}
      </div>
    </Container>
  );
}
