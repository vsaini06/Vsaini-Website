import Link from "next/link";
import { site, skills, summary } from "@/lib/content";
import { Card, Pill, SectionTitle } from "@/components/ui";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionTitle title="About" subtitle="AI Engineer | Software Engineer" />

      <Card>
        <p className="text-neutral-200">
        {summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link href={site.links.linkedin} className="font-mono text-sm text-cyan-300 hover:underline">LinkedIn →</Link>
          <Link href={site.links.github} className="font-mono text-sm text-green-300 hover:underline">GitHub →</Link>
          <Link href={site.links.resume} className="font-mono text-sm text-neutral-200 hover:underline">Resume →</Link>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold">Research and evaluation</h3>
        <p className="mt-3 text-neutral-200">My graduate studies in information technology and security included work on monitoring and logging. My independent AI engineering work applies research-style experimentation to retrieval, citation verification, inference cost, and multimodal scene understanding. Specific claims and reported metrics are documented on the corresponding project pages.</p>
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