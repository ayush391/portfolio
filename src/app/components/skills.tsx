"use client";
import { useChain, useSpringRef } from "@react-spring/web";
import BgSpringAnim from "./anim/bg-spring-anim";

import { FaLinux, FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiAntdesign, SiFigma, SiMaterialdesign } from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import SlideLeft from "./anim/slide-left-anim";
import SlideUp from "./anim/slide-up-anim";

export default function Skills() {
  const frameRef = useSpringRef();
  const langRef = useSpringRef();
  const otherRef = useSpringRef();
  useChain([frameRef, langRef, otherRef], [0.2, 0.45, 0.6]);
  return (
    <div className="flex flex-col gap-5 w-full max-w-4xl ">
      <SlideUp>
        <div className="font-medium text-2xl">Skills</div>
      </SlideUp>
      <div className="flex flex-wrap gap-8 w-full max-w-4xl">
        <SlideLeft animRef={frameRef}>
          <div className="flex bg-gray-100 dark:bg-neutral-500 p-3 rounded-xl flex-col gap-3">
            <div className="text-xs font-sans font-semibold">Frameworks</div>
            <div className="flex flex-wrap gap-3">
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <GrReactjs className="text-4xl " title="ReactJS" />
                </BgSpringAnim>
              </div>

              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <GrReactjs className="text-4xl " title="ReactJS" />
                </BgSpringAnim>
              </div>

              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <TbBrandFramerMotion
                    className="text-4xl"
                    title="Framer Motion"
                  />
                </BgSpringAnim>
              </div>

              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <TbBrandNextjs className="text-4xl" title="NextJS" />
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <SiAntdesign className="text-4xl" title="Ant Design" />
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <SiMaterialdesign className="text-4xl" title="Material UI" />
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <FaNodeJs className="text-4xl" title="NodeJS" />
                </BgSpringAnim>
              </div>
            </div>
          </div>
        </SlideLeft>
        <SlideLeft animRef={langRef}>
          <div className="flex bg-gray-100 dark:bg-neutral-500 p-3 rounded-xl flex-col gap-3">
            <div className="text-xs  font-sans font-semibold">Languages</div>
            <div className="flex flex-wrap gap-3">
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <TbBrandTailwind className="text-4xl" title="Tailwind" />
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <TbBrandJavascript className="text-4xl" title="Javascript" />
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <TbBrandTypescript className="text-4xl" title="Typescript" />
                </BgSpringAnim>
              </div>
            </div>
          </div>
        </SlideLeft>
        <SlideLeft animRef={otherRef}>
          <div className="flex bg-gray-100 dark:bg-neutral-500 p-3 rounded-xl flex-col gap-3">
            <div className="text-xs font-sans font-semibold">Other</div>
            <div className="flex flex-wrap gap-3">
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <TbBrandPython className="text-4xl" title="Python" />
                </BgSpringAnim>
              </div>

              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <SiFigma className="text-4xl " title="Figma" />
                </BgSpringAnim>
              </div>
            </div>{" "}
          </div>
        </SlideLeft>
      </div>
    </div>
  );
}
