import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import profileData from "@/content/profile.json";

export default function HomePage() {
  const profile = profileData as any;
  return (
    <Container>
      <Hero profile={profile} />
      <section className="mt-12 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sky-400">
            Cyber Resilience & GRC
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Helping organisations align with NIS2, ISO/IEC 27001:2022 and
            modern cyber risk frameworks while keeping incident response
            practical and measurable.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sky-400">
            DFIR & Threat Hunting
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Hands-on DFIR, threat hunting and XDR work in high-pressure,
            real-world incidents, not just lab scenarios.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-sky-400">
            OSINT & Intelligence
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            OSINT-driven corporate intelligence and financial investigations,
            inspired by investigative journalism and OCCRP methodologies.
          </p>
        </div>
      </section>
    </Container>
  );
}
