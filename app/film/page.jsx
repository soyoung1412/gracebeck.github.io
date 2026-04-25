import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";

export const metadata = {
  title: "Film | Grace Beck"
};

export default function FilmPage() {
  return (
    <PortfolioShell showFooter={false}>
      <WindowFrame title="film.exe" bodyClassName="min-h-[55vh]" />
    </PortfolioShell>
  );
}
