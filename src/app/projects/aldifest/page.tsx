"use client";

import BgSpringAnim from "@/app/components/anim/bg-spring-anim";
import FadeIn from "@/app/components/anim/fade-in-anim";
import SlideLeft from "@/app/components/anim/slide-left-anim";
import SlideUp from "@/app/components/anim/slide-up-anim";
import Trail from "@/app/components/anim/trail-anim";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useChain, useSpringRef } from "@react-spring/web";
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
            <div>
              <Trail animRef={titleRef}>
                <span className="font-medium text-3xl max-w-sm text-white">
                  A new website
                </span>
                <span className="font-medium text-3xl max-w-sm text-white">
                  for the Melbourne
                </span>
                <span className="font-medium text-3xl max-w-sm text-white">
                  design studio — MASS{" "}
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
                  <FaReact className="text-[50px] text-white font-bold" />
                  <GrGraphQl className="text-[50px] text-white font-bold" />
                  <TbBrandNextjs className="text-[50px] text-white font-bold" />
                </Trail>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <FadeIn animRef={descRef}>
              <div className="font-sans text-sm max-w-md text-white">
                A full website rebuild, both front-end and back. The backend
                consists of Prismic as the headless CMS with Netlify as the CI
                and hosting tool, and the front end is all Gatsby. Sprinkled
                throughout are some unique visual flourishes - like the SVG
                bloating text effect, and imagery that moves based on mouse and
                scroll position. It was absolute joy to work on this site, and
                with the talented and lovely folks at MASS. It even won an FWA
                of the Day award. You can read more about it in this article.{" "}
              </div>
            </FadeIn>
          </div>
        </div>

        <SlideUp animRef={logoBigRef}>
          <Image
            alt="aldi_logo_big"
            src={aldiLogoBig}
            width={0}
            height={0}
            className="w-96 mx-auto mt-auto md:block hidden"
          />
        </SlideUp>
      </div>
    </main>
  );
}
