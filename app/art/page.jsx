import { CategoryPageContent } from "@/components/cute-portfolio/category-page-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { artPage, artRail } from "@/lib/portfolio-content";

export const metadata = {
  title: "Art | Grace Beck"
};

export default function ArtPage() {
  return (
    <PortfolioShell searchPlaceholder={artPage.searchPlaceholder} rail={artRail}>
      <CategoryPageContent content={artPage} />
    </PortfolioShell>
  );
}
