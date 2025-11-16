import { Container } from "@/components/Container";
import certsData from "@/content/certifications.json";

type Cert = {
  name: string;
  issuer: string;
  year: number;
  category: string;
};

export default function CertificationsPage() {
  const certs = certsData as Cert[];
  return (
    <Container>
      <h1 className="text-xl font-semibold">Certifications</h1>
      <p className="mt-2 text-sm text-slate-300 max-w-2xl">
        A selection of certifications across GRC, DFIR, OSINT, cloud security
        and application security.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {certs.map((c, idx) => (
          <article
            key={idx}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm"
          >
            <h2 className="font-semibold">{c.name}</h2>
            <p className="mt-1 text-xs text-slate-400">
              {c.issuer} · {c.year}
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-sky-400">
              {c.category}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
