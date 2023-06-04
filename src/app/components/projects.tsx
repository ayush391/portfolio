import { useChain, useSpringRef } from "@react-spring/web";
import Link from "next/link";
import { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import aldiLogo from "../assets/aldi-logo.png";
import aldiLogoBig from "../assets/aldifest_2023.webp";
import stageverseLogoBig from "../assets/blogAppScreenShot.png";
import blogAppSS from "../assets/blogAppScreenShot2.png";
import stageverseLogo from "../assets/stageverse-logo.svg";
import Trail from "./anim/trail-anim";
import Card from "./ui/card";
export default function Projects() {
  const headingRef = useSpringRef();
  const projectsRef = useSpringRef();
  const scrollRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft = 200;
  //   }
  // }, [scrollRef.current]);

  useChain([projectsRef, headingRef], [0.2, 1]);
  return (
    <div className="w-screen overflow-hidden">
      <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto mb-5 md:px-0 px-5">
        <Trail animRef={headingRef}>
          <div className="font-medium text-2xl">Recent Projects</div>
        </Trail>
      </div>
      <ScrollContainer
        horizontal
        nativeMobileScroll
        innerRef={scrollRef}
        className="flex gap-3 md:gap-10 w-full hover:cursor-pointer overflow-visible py-16 -mt-16 md:px-80 px-5"
      >
        <Trail animRef={projectsRef}>
          <Link href="/projects/aldifest">
            <Card topImg={aldiLogo} bottomImg={aldiLogoBig} bgColor="#3AC9F7" />
          </Link>
          <Link href="/projects/blogapp">
            <Card
              topTitle="Blog Website"
              bottomImg={blogAppSS}
              bgColor="#1F2937"
            />
          </Link>
          <Link href="/projects/stageverse">
            <Card
              topImg={stageverseLogo}
              bottomImg={stageverseLogoBig}
              bgColor="linear-gradient( #6e80ef, #61dfc7)"
              bottomImageClassName="scale-[150%] relative top-8"
            />
          </Link>
          <Card
            topImg={stageverseLogo}
            bottomImg={stageverseLogoBig}
            bgColor="linear-gradient( #6e80ef, #61dfc7)"
            bottomImageClassName="scale-[150%] relative top-8"
          />
        </Trail>
      </ScrollContainer>
    </div>
  );
}
