import { ContactSection } from "@/components/portfolio/contact-section";
import { PageShell } from "@/components/portfolio/page-shell";
import { contactContent } from "@/lib/portfolio-content";

export default function ContactPage() {
  return (
    <PageShell
      heading="Let's create together"
      subheading="Contact details and collaboration info in a clean standalone page."
    >
      <ContactSection content={contactContent} />
    </PageShell>
  );
}
