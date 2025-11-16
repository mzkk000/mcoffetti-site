import { Container } from "@/components/Container";

export default function OsintPage() {
  return (
    <Container>
      <h1 className="text-xl font-semibold">OSINT & Threat Hunting</h1>
      <p className="mt-2 text-sm text-slate-300 max-w-2xl">
        Highlights from OSINT investigations, CTF competitions and
        threat-hunting work, including DEFCON OSINT CTF and TraceLabs
        global events.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-slate-200">
        <li>Top results in DEFCON OSINT CTF and TraceLabs global events.</li>
        <li>Blue team exercises and forensics-focused competitions.</li>
        <li>Methodologies inspired by OCCRP and investigative journalism.</li>
      </ul>
    </Container>
  );
}
