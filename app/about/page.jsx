import { AboutSection } from "@/components/portfolio/about-section";
import { PageShell } from "@/components/portfolio/page-shell";
import { aboutContent, strengths } from "@/lib/portfolio-content";

export default function AboutPage() {
  return (
    <PageShell
      heading="About Grace"
      subheading="My process, strengths, and visual style all in one dedicated section."
    >
      <AboutSection content={aboutContent} strengths={strengths} />
    </PageShell>
  );
}
