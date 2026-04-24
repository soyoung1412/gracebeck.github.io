import { HomePageContent } from "@/components/cute-portfolio/home-page-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { homePage, homeRail } from "@/lib/portfolio-content";

export default function HomePage() {
  return (
    <PortfolioShell searchPlaceholder={homePage.searchPlaceholder} rail={homeRail}>
      <HomePageContent content={homePage} />
    </PortfolioShell>
  );
}
