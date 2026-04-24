import { GalleryPageContent } from "@/components/cute-portfolio/gallery-page-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { artPage } from "@/lib/portfolio-content";

export const metadata = {
  title: "Art | Grace Beck"
};

export default function ArtPage() {
  return (
    <PortfolioShell>
      <GalleryPageContent content={artPage} />
    </PortfolioShell>
  );
}
