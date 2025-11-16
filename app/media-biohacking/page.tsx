import { Container } from "@/components/Container";
import { MediaCard } from "@/components/MediaCard";
import mediaData from "@/content/media.json";

export default function MediaPage() {
  const items = mediaData as any[];
  return (
    <Container>
      <h1 className="text-xl font-semibold">Media & Biohacking</h1>
      <p className="mt-2 text-sm text-slate-300 max-w-2xl">
        Interviews and articles focusing on biohacking and implanted
        microchips, excluding coverage related to specific legal cases.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
