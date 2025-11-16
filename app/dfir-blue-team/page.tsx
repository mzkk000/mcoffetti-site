import { Container } from "@/components/Container";

export default function DfirPage() {
  return (
    <Container>
      <h1 className="text-xl font-semibold">DFIR & Blue Team</h1>
      <p className="mt-2 text-sm text-slate-300 max-w-2xl">
        Digital forensics, incident response and blue team work in
        high-pressure real-world incidents, with a focus on containment,
        root cause analysis and resilience.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-200">
        <li>First responder in high-profile incidents, supporting Italian organisations.</li>
        <li>Hands-on DFIR across endpoints, servers and cloud workloads.</li>
        <li>Use of XDR platforms to reduce detection and response times.</li>
      </ul>
    </Container>
  );
}
