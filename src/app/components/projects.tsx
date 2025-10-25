"use client";

import { useChain, useSpringRef } from "@react-spring/web";
import Link from "next/link";
import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import type { Project } from "@/sanity/lib/types";
import Trail from "./anim/trail-anim";
import Card from "./ui/card";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const headingRef = useSpringRef();
  const projectsRef = useSpringRef();
  const scrollRef = useRef<HTMLDivElement>(null);

  useChain([projectsRef, headingRef], [0.2, 1]);

  return (
    <>
      <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
        <Trail animRef={headingRef}>
          <div className="font-medium text-2xl">Projects</div>
        </Trail>
      </div>
      {projects.length > 0 ? (
        <ScrollContainer
          horizontal
          nativeMobileScroll
          innerRef={scrollRef}
          className="flex gap-3 md:gap-10 w-screen hover:cursor-pointer overflow-visible py-16 -my-20 md:px-16 lg:px-10  xl:px-[22%] px-5"
        >
          <Trail animRef={projectsRef}>
            {projects.map((project) => (
              <Link key={project._id} href={`/projects/${project.slug}`}>
                <Card
                  topImg={project.topImage}
                  topTitle={project.title}
                  bottomImg={project.bottomImage}
                  bgColor={project.backgroundColor}
                  // bottomImageClassName={project.bottomImageClassName}
                />
              </Link>
            ))}
          </Trail>
        </ScrollContainer>
      ) : (
        <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
          <Trail animRef={headingRef}>
            <div>No projects found</div>
          </Trail>
        </div>
      )}
    </>
  );
}
