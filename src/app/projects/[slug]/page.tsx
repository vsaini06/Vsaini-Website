import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/content";
import { Card, Pill, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="space-y-8">
      <SectionTitle title={project.title} subtitle={project.subtitle} />

      <Reveal>
        <Card>
          <p className="text-neutral-200">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-green-300 hover:underline"
              >
                {l.label} →
              </Link>
            ))}
            <Link href="/projects" className="font-mono text-sm text-neutral-400 hover:underline">
              ← Back to Projects
            </Link>
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card>
          <h3 className="text-lg font-semibold">Highlights</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-200">
            {project.highlights.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </Card>
      </Reveal>

      {project.sections.map((s) => (
        <Reveal key={s.title}>
          <Card>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <div className="mt-4 space-y-2 text-sm text-neutral-200">
              {s.body.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}