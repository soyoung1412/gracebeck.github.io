import { PosterWorksContent } from "@/components/cute-portfolio/poster-works-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { posterWorksPage } from "@/lib/portfolio-content";

export const metadata = {
  title: "Poster Works | Grace Beck"
};

export default function PostersPage() {
  return (
    <PortfolioShell>
      <PosterWorksContent content={posterWorksPage} />
    </PortfolioShell>
  );
}
