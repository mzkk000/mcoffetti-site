import { Container } from "@/components/Container";
import { Timeline } from "@/components/Timeline";
import experienceData from "@/content/experience.json";

export default function ExperiencePage() {
  const data = experienceData as any;
  const items = data.items as any[];
  return (
    <Container>
      <h1 className="text-xl font-semibold">Experience</h1>
      <p className="mt-2 text-sm text-slate-300 max-w-2xl">
        A chronological view of my work across industry, consulting and
        intelligence roles.
      </p>
      <div className="mt-8">
        <Timeline items={items} />
      </div>
    </Container>
  );
}
