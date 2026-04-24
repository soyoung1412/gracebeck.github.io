import { ContactPageContent } from "@/components/cute-portfolio/contact-page-content";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { contactPage, contactRail } from "@/lib/portfolio-content";

export const metadata = {
  title: "Contact | Grace Beck"
};

export default function ContactPage() {
  return (
    <PortfolioShell searchPlaceholder={contactPage.searchPlaceholder} rail={contactRail}>
      <ContactPageContent content={contactPage} />
    </PortfolioShell>
  );
}
