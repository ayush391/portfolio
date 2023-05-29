"use client";

import Header from "./components/header";
import Projects from "./components/projects";
import Socials from "./components/socials";

export default function Home() {
  return (
    <main className="flex items-center flex-col gap-10 xl:px-24 md:px-16 px-5 py-12 ">
      {/* header bio */}
      <Header />
      {/* socials */}
      <Socials />
      {/* projects */}
      <Projects />
      {/* experience */}
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        <div className="font-medium text-2xl">Experience</div>
        <div className="flex flex-nowrap gap-8 overflow-x-scroll">
          <div className="w-[400px] h-96 bg-blue-400" />
          <div className="w-[400px] h-96 bg-red-400" />
          <div className="w-[400px] h-96 bg-pink-400" />
          <div className="w-[400px] h-96 bg-green-400" />
        </div>
      </div>
    </main>
  );
}
