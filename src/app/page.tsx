import { client } from "@/sanity/lib/client";
import {
  getProfile,
  getAllProjects,
  getExperiences,
  getSocialLinks,
  getSiteSettings,
} from "@/sanity/lib/queries";
import type {
  Profile,
  Project,
  Experience as ExperienceType,
  SocialLink,
  SiteSettings,
} from "@/sanity/lib/types";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import PageWrapper from "./page-wrapper";

export const revalidate = 3600; // Revalidate every hour (ISR)

async function getPageData() {
  const [profile, projects, experiences, socialLinks, siteSettings] =
    await Promise.all([
      getProfile(),
      getAllProjects(),
      getExperiences(),
      getSocialLinks(),
      getSiteSettings(),
    ]);

  return {
    profile,
    projects,
    experiences,
    socialLinks,
    siteSettings,
  };
}

export default async function Home() {
  const { profile, projects, experiences, socialLinks, siteSettings } =
    await getPageData();
  console.log(profile);
  return (
    <PageWrapper>
      <main className="flex items-center flex-col gap-10 xl:px-24 md:px-16 px-5 py-12 ">
        {/* header bio */}
        <Header profile={profile} socialLinks={socialLinks} />
        {/* projects */}
        <Projects projects={projects} />
        {/* experience */}
        <Experience experiences={experiences} />
        {/* skills */}
        <Skills />
      </main>
      <Footer siteSettings={siteSettings} socialLinks={socialLinks} />
    </PageWrapper>
  );
}
