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
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";
import blogAppSS from "../../assets/blogAppScreenShot2.png";

export default function BlogAppPage() {
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
    <main className="flex w-screen min-h-screen items-center bg-[#1F2937] flex-col gap-10 xl:px-24 md:px-16 px-5 py-8 ">
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
              <div className="text-[#EF85EF] font-bold md:text-4xl text-lg">
                Blog App
              </div>
            </SlideLeft>
            <Link
              href="https://jocular-youtiao-1a8b03.netlify.app/"
              target="_blank"
            >
              <div className="underline underline-offset-2 text-white">
                <Trail animRef={titleRef}>
                  <span className="font-medium text-3xl max-w-sm text-white">
                    A blogging
                  </span>
                  <span className="font-medium text-3xl max-w-sm text-white">
                    website with
                  </span>
                  <span className="font-medium text-3xl max-w-sm text-white">
                    material design and CRUD
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
                    <Tooltip placement="bottom" title="Material UI">
                      <SiMaterialdesign className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                  <BgSpringAnim>
                    <Tooltip placement="bottom" title="NodeJS">
                      <FaNodeJs className="text-3xl text-white font-bold" />
                    </Tooltip>
                  </BgSpringAnim>
                </Trail>
              </div>
            </div>
          </div>
          <div className="w-96 mx-auto mt-auto md:block hidden">
            <SlideUp animRef={logoBigRef}>
              <Image alt="aldi_logo_big" src={blogAppSS} width={0} height={0} />
            </SlideUp>
          </div>
          <div className="flex flex-col gap-5">
            <FadeIn animRef={descRef}>
              <div className="font-sans md:text-lg text-sm max-w-md text-white">
                A visually appealing blogging website designed with Material
                Design aesthetics. Powered by React and Material UI on the front
                end, and backed by Node.js and Express on the server, It offers
                authorization functionalities and seamless CRUD operations.
                Unleash your creativity and effortlessly manage your content
                with our intuitive interface.{" "}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
