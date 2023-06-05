"use client";
import Experience from "./components/experience";
import Header from "./components/header";
import Projects from "./components/projects";
import Socials from "./components/socials";

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-10 xl:px-24 md:px-16 px-5 pt-12 ">
      {/* header bio */}
      <Header />
      {/* socials */}
      <Socials />
      {/* projects */}
      <Projects />
      {/* experience */}
      <Experience />
    </main>
  );
}
