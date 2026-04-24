import { HomeLandingContent } from "@/components/cute-portfolio/home-landing-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { homeLandingPage } from "@/lib/portfolio-content";

export default function HomePage() {
  return (
    <PortfolioShell>
      <HomeLandingContent content={homeLandingPage} />
    </PortfolioShell>
  );
}
