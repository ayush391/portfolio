"use client";

import BgSpringAnim from "@/app/components/anim/bg-spring-anim";
import FadeIn from "@/app/components/anim/fade-in-anim";
import SlideLeft from "@/app/components/anim/slide-left-anim";
import SlideUp from "@/app/components/anim/slide-up-anim";
import Trail from "@/app/components/anim/trail-anim";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useChain, useSpringRef } from "@react-spring/web";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import stageverseLogoBig from "../../assets/blogAppScreenShot.png";
import stageverseLogo from "../../assets/stageverse-logo.svg";

export default function StageversePage() {
  const techRef = useSpringRef();
  const techTitleRef = useSpringRef();
  const titleRef = useSpringRef();
  const logoRef = useSpringRef();
  const logoBigRef = useSpringRef();
  const descRef = useSpringRef();

  useChain(
    [titleRef, logoRef, descRef, logoBigRef, techRef, techTitleRef],
    [0, 0.2, 0.25, 0.3, 0.5, 1],
    1500
  );

  return (
    <main className="flex w-full min-h-screen overflow-hidden items-center bg-gradient-to-r from-[#6e80ef] to-[#61dfc7] flex-col gap-10 xl:px-24 md:px-16 px-5 py-8 ">
      <div className="flex flex-col gap-10 max-w-4xl w-full">
        <Link href="/" className="mr-auto">
          <SlideLeft>
            <BgSpringAnim>
              <ArrowLeftOutlined className="text-3xl text-white" />
            </BgSpringAnim>
          </SlideLeft>
        </Link>
        <div className="flex md:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col gap-10">
            <SlideLeft animRef={logoRef} direction="right">
              <Image
                alt="aldi_logo"
                src={stageverseLogo}
                width={0}
                height={0}
                className="w-52 "
              />
            </SlideLeft>
            <div>
              <Trail animRef={titleRef}>
                <span className="font-medium text-3xl max-w-sm text-white">
                  A visually
                </span>
                <span className="font-medium text-3xl max-w-sm text-white">
                  appealing landing
                </span>
                <span className="font-medium text-3xl max-w-sm text-white">
                  page for an{" "}
                </span>
                <span className="font-medium text-3xl max-w-sm text-white">
                  NFT marketplace{" "}
                </span>
              </Trail>
            </div>

            <div className="flex flex-col gap-5">
              <SlideUp animRef={techTitleRef}>
                <div className="font-sans underline font-semibold text-sm max-w-md text-white">
                  Technologies Used
                </div>
              </SlideUp>
              <div className="flex gap-5">
                <Trail animRef={techRef}>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="ReactJS">
                      <FaReact className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="Framer Motion">
                      <FiFramer className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                </Trail>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <FadeIn animRef={descRef}>
              <div className="font-sans md:text-lg text-sm max-w-md text-white">
                A clone of the Stageverse website. I recreated it using React
                and Framer Motion to showcase my talent of crafting fluid
                animations, parallax effects and seamless transitions.{" "}
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="w-72 mx-auto mt-auto md:block hidden scale-[250%]">
          <SlideUp animRef={logoBigRef}>
            <Image
              alt="aldi_logo_big"
              src={stageverseLogoBig}
              width={0}
              height={0}
            />
          </SlideUp>
        </div>
      </div>
    </main>
  );
}
