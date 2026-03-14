import { getPortfolioData } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Leadership } from "@/components/leadership";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const data = getPortfolioData();

  return (
    <>
      <Navbar />

      <main className="relative z-10">
        <Hero name={data.name} subtitle={data.subtitle} roles={data.roles} />

        <About
          bio={data.about.bio}
          email={data.about.email}
          phone={data.about.phone}
          location={data.about.location}
          languages={data.about.languages}
        />

        <Skills skills={data.skills} />

        <Education education={data.education} />

        <Leadership leadership={data.leadership} />

        <Projects projects={data.projects} />

        <Experience experience={data.experience} />

        <Certificates certificates={data.certificates} />

        <Contact />
      </main>

      <Footer
        tagline={data.footer.tagline}
        year={data.footer.year}
        socials={data.footer.socials}
      />
    </>
  );
}
