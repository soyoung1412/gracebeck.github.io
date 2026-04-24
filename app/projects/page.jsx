import { PageShell } from "@/components/portfolio/page-shell";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { featuredProjects, skillGroups } from "@/lib/portfolio-content";

export default function ProjectsPage() {
  return (
    <PageShell
      heading="Projects & craft"
      subheading="Project cards and tool stacks now live on their own dedicated page."
    >
      <div className="space-y-8">
        <ProjectsSection projects={featuredProjects} />
        <SkillsSection groups={skillGroups} />
      </div>
    </PageShell>
  );
}
