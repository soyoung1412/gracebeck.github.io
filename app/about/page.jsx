import { AboutPageContent } from "@/components/cute-portfolio/about-page-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { aboutPage, aboutRail } from "@/lib/portfolio-content";

export const metadata = {
  title: "About | Grace Beck"
};

export default function AboutPage() {
  return (
    <PortfolioShell searchPlaceholder={aboutPage.searchPlaceholder} rail={aboutRail}>
      <AboutPageContent content={aboutPage} />
    </PortfolioShell>
  );
}
