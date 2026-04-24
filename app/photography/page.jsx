import { CategoryPageContent } from "@/components/cute-portfolio/category-page-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { photographyPage, photographyRail } from "@/lib/portfolio-content";

export const metadata = {
  title: "Photography | Grace Beck"
};

export default function PhotographyPage() {
  return (
    <PortfolioShell searchPlaceholder={photographyPage.searchPlaceholder} rail={photographyRail}>
      <CategoryPageContent content={photographyPage} />
    </PortfolioShell>
  );
}
