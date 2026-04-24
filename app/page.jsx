import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { PageShell } from "@/components/portfolio/page-shell";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { featuredProjects, heroContent, socialLinks } from "@/lib/portfolio-content";

export default function HomePage() {
  return (
    <PageShell
      heading="Welcome to my portfolio"
      subheading="A soft, page-by-page experience inspired by playful dashboard UIs."
    >
      <div className="space-y-8">
        <HeroSection content={heroContent} />
        <ProjectsSection projects={featuredProjects.slice(0, 2)} />
        <SiteFooter socialLinks={socialLinks} />
      </div>
    </PageShell>
  );
}
