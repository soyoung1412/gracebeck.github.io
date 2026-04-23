import { AboutSection } from "@/components/portfolio/about-section";
import { BackgroundAccents } from "@/components/portfolio/background-accents";
import { ContactSection } from "@/components/portfolio/contact-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SkillsSection } from "@/components/portfolio/skills-section";
import {
  aboutContent,
  contactContent,
  featuredProjects,
  heroContent,
  navigation,
  skillGroups,
  socialLinks,
  strengths
} from "@/lib/portfolio-content";

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <BackgroundAccents />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-8 pt-5 sm:px-6 lg:px-8">
        <Navbar items={navigation} />

        <main className="flex-1 space-y-8 pb-12 pt-6 sm:space-y-10 sm:pt-8">
          <HeroSection content={heroContent} />
          <ProjectsSection projects={featuredProjects} />
          <SkillsSection groups={skillGroups} />
          <AboutSection content={aboutContent} strengths={strengths} />
          <ContactSection content={contactContent} />
        </main>

        <SiteFooter socialLinks={socialLinks} />
      </div>
    </div>
  );
}
