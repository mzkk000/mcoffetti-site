import Link from "next/link";
import { Container } from "@/components/Container";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/osint-threat-hunting", label: "OSINT & Hunting" },
  { href: "/dfir-blue-team", label: "DFIR & Blue Team" },
  { href: "/talks", label: "Talks" },
  { href: "/media-biohacking", label: "Media & Biohacking" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  return (
    <header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="font-semibold tracking-tight">
            MC.
          </Link>
          <ul className="flex flex-wrap gap-4 text-sm text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
