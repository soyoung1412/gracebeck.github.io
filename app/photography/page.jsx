import { GalleryPageContent } from "@/components/cute-portfolio/gallery-page-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { photographyPage } from "@/lib/portfolio-content";

export const metadata = {
  title: "Photography of Youth | Grace Beck"
};

export default function PhotographyPage() {
  return (
    <PortfolioShell>
      <GalleryPageContent content={photographyPage} />
    </PortfolioShell>
  );
}
