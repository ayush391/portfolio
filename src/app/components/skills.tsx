import { useChain, useSpringRef } from "@react-spring/web";
import BgSpringAnim from "./anim/bg-spring-anim";

import { Tooltip } from "antd";
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
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">ReactJS</div>}
                  >
                    <GrReactjs className="text-4xl " />
                  </Tooltip>
                </BgSpringAnim>
              </div>

              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">NextJS</div>}
                  >
                    <TbBrandNextjs className="text-4xl" />
                  </Tooltip>
                </BgSpringAnim>
              </div>

              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">Framer Motion</div>}
                  >
                    <TbBrandFramerMotion className="text-4xl" />
                  </Tooltip>
                </BgSpringAnim>
              </div>

              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">Tailwind</div>}
                  >
                    <TbBrandTailwind className="text-4xl" />
                  </Tooltip>
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">Ant Design</div>}
                  >
                    <SiAntdesign className="text-4xl" />
                  </Tooltip>
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">Material UI</div>}
                  >
                    <SiMaterialdesign className="text-4xl" />
                  </Tooltip>
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">NodeJS</div>}
                  >
                    <FaNodeJs className="text-4xl" />
                  </Tooltip>
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
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">Javascript</div>}
                  >
                    <TbBrandJavascript className="text-4xl" />
                  </Tooltip>
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">Typescript</div>}
                  >
                    <TbBrandTypescript className="text-4xl" />
                  </Tooltip>
                </BgSpringAnim>
              </div>
              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">Python</div>}
                  >
                    <TbBrandPython className="text-4xl" />
                  </Tooltip>
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
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">Figma</div>}
                  >
                    <SiFigma className="text-4xl " />
                  </Tooltip>
                </BgSpringAnim>
              </div>

              <div className="hover:cursor-pointer">
                <BgSpringAnim>
                  <Tooltip
                    placement="bottom"
                    title={() => <div className="font-sans">Linux</div>}
                  >
                    <FaLinux className="text-4xl" />
                  </Tooltip>
                </BgSpringAnim>
              </div>
            </div>{" "}
          </div>
        </SlideLeft>
      </div>
    </div>
  );
}
