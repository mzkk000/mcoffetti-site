import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/70">
      <Container>
        <div className="flex flex-col gap-2 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mattia Coffetti.</p>
          <p>Built with Next.js, Tailwind CSS and TinaCMS.</p>
        </div>
      </Container>
    </footer>
  );
}
