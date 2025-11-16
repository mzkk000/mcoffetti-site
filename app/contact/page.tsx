import { Container } from "@/components/Container";
import profileData from "@/content/profile.json";

export default function ContactPage() {
  const profile = profileData as any;
  return (
    <Container>
      <h1 className="text-xl font-semibold">Contact</h1>
      <p className="mt-2 text-sm text-slate-300 max-w-2xl">
        The best way to reach me for advisory work, speaking invitations
        or collaborations.
      </p>
      <div className="mt-6 space-y-2 text-sm text-slate-200">
        {profile.links.email && (
          <p>
            Email:{" "}
            <a
              href={`mailto:${profile.links.email}`}
              className="text-sky-300 underline underline-offset-2"
            >
              {profile.links.email}
            </a>
          </p>
        )}
        {profile.links.linkedin && (
          <p>
            LinkedIn:{" "}
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sky-300 underline underline-offset-2"
            >
              {profile.links.linkedin}
            </a>
          </p>
        )}
      </div>
    </Container>
  );
}
