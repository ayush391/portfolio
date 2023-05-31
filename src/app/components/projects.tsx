import { useChain, useSpringRef } from "@react-spring/web";
import Link from "next/link";
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

  useChain([projectsRef, headingRef], [0.2, 1], 1500);
  return (
    <div className="flex flex-col gap-8 w-full max-w-[1150px]">
      <Trail animRef={headingRef}>
        <div className="font-medium text-2xl">Recent Projects</div>
      </Trail>
      <ScrollContainer
        horizontal
        className="flex gap-10 w-full hover:cursor-pointer overflow-visible md:p-16 md:-m-16 "
      >
        <Trail animRef={projectsRef}>
          <Link href="/projects/aldifest">
            <Card topImg={aldiLogo} bottomImg={aldiLogoBig} bgColor="#3AC9F7" />
          </Link>
          <Card
            topTitle="Blog Website"
            bottomImg={blogAppSS}
            bgColor="#EF85EF"
          />
          <Card
            topImg={stageverseLogo}
            bottomImg={stageverseLogoBig}
            bgColor="linear-gradient( #6e80ef, #61dfc7)"
            bottomImageClassName="scale-[150%] relative top-8"
          />
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
