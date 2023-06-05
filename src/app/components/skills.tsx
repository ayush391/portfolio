import { useChain, useSpringRef } from "@react-spring/web";
import Link from "next/link";
import BgSpringAnim from "./anim/bg-spring-anim";
import Trail from "./anim/trail-anim";

import { FaLinux, FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiAntdesign, SiFigma } from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";

export default function Skills() {
  const skillsRef = useSpringRef();
  useChain([skillsRef]);
  return (
    <div className="flex flex-col gap-5 w-full max-w-4xl ">
      <div className="font-medium text-2xl">Skills</div>
      <div className="flex flex-wrap gap-8 w-full max-w-4xl">
        <div className="flex bg-gray-100 p-3 rounded-xl flex-col gap-3">
          <div className="text-xs text-black font-sans font-semibold">
            Frameworks
          </div>
          <div className="flex flex-wrap gap-2">
            <Trail>
              <Link href="javascript:void(0)">
                <BgSpringAnim>
                  <GrReactjs className="text-4xl " />
                </BgSpringAnim>
              </Link>

              <Link href="javascript:void(0)">
                <BgSpringAnim>
                  <TbBrandNextjs className="text-4xl" />
                </BgSpringAnim>
              </Link>

              <Link href="javascript:void(0)">
                <BgSpringAnim>
                  <TbBrandFramerMotion className="text-4xl" />
                </BgSpringAnim>
              </Link>

              <Link href="javascript:void(0)">
                <BgSpringAnim>
                  <TbBrandTailwind className="text-4xl" />
                </BgSpringAnim>
              </Link>
            </Trail>
            <Link href="javascript:void(0)">
              <BgSpringAnim>
                <SiAntdesign className="text-4xl" />
              </BgSpringAnim>
            </Link>
            <Link href="javascript:void(0)">
              <BgSpringAnim>
                <FaNodeJs className="text-4xl" />
              </BgSpringAnim>
            </Link>
          </div>
        </div>
        <div className="flex bg-gray-100 p-3 rounded-xl flex-col gap-3">
          <div className="text-xs text-black font-sans font-semibold">
            Languages
          </div>
          <div className="flex flex-wrap gap-2">
            <Trail animRef={skillsRef}>
              <Link href="javascript:void(0)">
                <BgSpringAnim>
                  <TbBrandJavascript className="text-4xl" />
                </BgSpringAnim>
              </Link>
              <Link href="javascript:void(0)">
                <BgSpringAnim>
                  <TbBrandTypescript className="text-4xl" />
                </BgSpringAnim>
              </Link>
              <Link href="javascript:void(0)">
                <BgSpringAnim>
                  <TbBrandPython className="text-4xl" />
                </BgSpringAnim>
              </Link>
            </Trail>
          </div>
        </div>

        <div className="flex bg-gray-100 p-3 rounded-xl flex-col gap-3">
          <div className="text-xs text-black font-sans font-semibold">
            Other
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="javascript:void(0)">
              <BgSpringAnim>
                <SiFigma className="text-4xl " />
              </BgSpringAnim>
            </Link>

            <Link href="javascript:void(0)">
              <BgSpringAnim>
                <FaLinux className="text-4xl" />
              </BgSpringAnim>
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
