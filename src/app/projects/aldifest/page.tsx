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
import { GrGraphQl } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import aldiLogo from "../../assets/aldi-logo.png";
import aldiLogoBig from "../../assets/aldifest_2023.webp";

export default function AldifestPage() {
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
    <main className="flex w-screen min-h-screen items-center bg-[#3AC9F7] flex-col gap-10 xl:px-24 md:px-16 px-5 py-8 ">
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
                src={aldiLogo}
                width={0}
                height={0}
                className="w-52 "
              />
            </SlideLeft>
            <Link href="https://aldifest.ie" target="_blank">
              <div className="underline underline-offset-2 text-white">
                <Trail animRef={titleRef}>
                  <span className="font-medium text-3xl max-w-sm text-white">
                    A new website
                  </span>
                  <span className="font-medium text-3xl max-w-sm text-white">
                    for the Aldifest
                  </span>
                  <span className="font-medium text-3xl max-w-sm text-white">
                    2023 Competition{" "}
                  </span>
                </Trail>
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <SlideUp animRef={techTitleRef}>
                <div className="font-sans font-semibold text-sm max-w-md text-white">
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
                    <Tooltip placement="bottom" title="GraphQL">
                      <GrGraphQl className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="NextJS">
                      <TbBrandNextjs className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                </Trail>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <FadeIn animRef={descRef}>
              <div className="font-sans md:text-lg text-sm max-w-md text-white">
                A full website rebuild, both front-end and back-end. The backend
                consists of GraphQL and Postgres. The front-end was done in
                NextJS using Ant Design. Sprinkled throughout are some unique
                visual flourishes - like the SVG bloating text effect, and
                imagery that moves based on mouse and scroll position. It was
                absolute joy to work on this site, and with the talented and
                lovely folks at Raftlabs. Last time I checked it had over 5000
                receipts submitted by 3200+ participants.{" "}
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="w-96 mx-auto mt-auto md:block hidden">
          <SlideUp animRef={logoBigRef}>
            <Image alt="aldi_logo_big" src={aldiLogoBig} width={0} height={0} />
          </SlideUp>
        </div>
      </div>
    </main>
  );
}
