import Image from "next/image";

type Profile = {
  name: string;
  headline: string;
  location: string;
  shortBio: string;
  links: {
    linkedin?: string;
    email?: string;
  };
};

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="flex flex-col gap-6 pt-8 md:flex-row md:items-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border border-slate-700 md:h-40 md:w-40">
        <Image
          src="/avatar.jpg"
          alt={profile.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold md:text-3xl">
          {profile.name}
        </h1>
        <p className="text-sm font-medium text-sky-400">
          {profile.headline}
        </p>
        <p className="text-xs uppercase tracking-wide text-slate-400">
          {profile.location}
        </p>
        <p className="max-w-2xl text-sm text-slate-200">
          {profile.shortBio}
        </p>
        <div className="flex gap-3 text-sm">
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sky-500 px-4 py-1 text-sky-300 hover:bg-sky-500/10"
            >
              LinkedIn
            </a>
          )}
          {profile.links.email && (
            <a
              href={`mailto:${profile.links.email}`}
              className="rounded-full border border-slate-600 px-4 py-1 text-slate-200 hover:bg-slate-800"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
