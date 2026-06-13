import Link from "next/link";
import { site, skills } from "@/lib/content";
import { Card, Pill, SectionTitle } from "@/components/ui";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="About" subtitle="Software and AI engineer" />

      <Card>
        <p className="text-neutral-200">
        I’m an early career AI-focused Software Engineer who believes the best systems are fast, resilient, and secure; but I never stop thinking about whether something feels intuitive to the person on the other end. I’m a curious, quick learner who picks up new tools fast and goes deep when it matters, caring about latency, failure modes, and whether AI output can actually be trusted. I collaborate well across in person and remote teams, working efficiently no matter the setup. On OPT, looking for a full-time role.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link href={site.links.linkedin} className="font-mono text-sm text-cyan-300 hover:underline">Linkedin →</Link>
          <Link href={site.links.github} className="font-mono text-sm text-green-300 hover:underline">Github →</Link>
          <Link href={site.links.resume} className="font-mono text-sm text-neutral-200 hover:underline">Resume →</Link>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <Card key={group}>
            <h3 className="text-lg font-semibold">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}