import { CategoryPageContent } from "@/components/cute-portfolio/category-page-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { graphicDesignPage, graphicDesignRail } from "@/lib/portfolio-content";

export const metadata = {
  title: "Posters | Grace Beck"
};

export default function PostersPage() {
  return (
    <PortfolioShell searchPlaceholder={graphicDesignPage.searchPlaceholder} rail={graphicDesignRail}>
      <CategoryPageContent content={graphicDesignPage} />
    </PortfolioShell>
  );
}
