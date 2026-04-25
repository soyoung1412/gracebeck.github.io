import { Reveal } from "@/components/ui/reveal";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";

export function ContactPageContent({ content }) {
  const email = content.email ?? content.links?.[0]?.label ?? "sb2764@cornell.edu";

  return (
    <Reveal>
      <WindowFrame title="contact.exe" className="mx-auto max-w-[760px]">
        <div className="flex justify-center py-6 sm:py-10">
          <a
            href={`mailto:${email}`}
            className="desktop-link px-6 py-4 font-display text-base font-black uppercase tracking-[0.14em] text-[var(--foreground-strong)] sm:text-xl"
          >
            {email}
          </a>
        </div>
      </WindowFrame>
    </Reveal>
  );
}
