import { CategoryPageContent } from "@/components/cute-portfolio/category-page-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { filmPage, filmRail } from "@/lib/portfolio-content";

export const metadata = {
  title: "Film | Grace Beck"
};

export default function FilmPage() {
  return (
    <PortfolioShell searchPlaceholder={filmPage.searchPlaceholder} rail={filmRail}>
      <CategoryPageContent content={filmPage} />
    </PortfolioShell>
  );
}
