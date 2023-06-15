"use client";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import DarkModeButton from "./components/ui/dark-mode-btn";

export default function Home() {
  return (
    <>
      <nav className="flex justify-end xl:px-80 md:px-16 px-5 py-12 absolute w-full">
        <DarkModeButton />
      </nav>
      <main className="flex items-center flex-col gap-10 xl:px-24 md:px-16 px-5 py-12 ">
        {/* header bio */}
        <Header />
        {/* projects */}
        <Projects />
        {/* experience */}
        <Experience />
        {/* skills */}
        <Skills />
      </main>
      <Footer />
    </>
  );
}
