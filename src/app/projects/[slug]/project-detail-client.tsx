"use client";

import BgSpringAnim from "@/app/components/anim/bg-spring-anim";
import FadeIn from "@/app/components/anim/fade-in-anim";
import SlideLeft from "@/app/components/anim/slide-left-anim";
import SlideUp from "@/app/components/anim/slide-up-anim";
import Trail from "@/app/components/anim/trail-anim";
import { getIconComponent } from "@/sanity/lib/iconMapper";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/sanity/lib/sanity.types";
import { FaArrowLeft } from "react-icons/fa";
import { useChain, useSpringRef } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  const {
    title,
    shortDescription,
    description,
    topImage,
    bottomImage,
    backgroundColor,
    externalLink,
    technologies,
    textColor = "#fff",
  } = project;

  // Animation refs
  const techRef = useSpringRef();
  const techTitleRef = useSpringRef();
  const titleRef = useSpringRef();
  const logoRef = useSpringRef();
  const logoBigRef = useSpringRef();
  const descRef = useSpringRef();

  useChain(
    [titleRef, logoRef, descRef, logoBigRef, techRef, techTitleRef],
    [0, 0.2, 0.25, 0.3, 0.5, 1],
  );

  // Generate image URLs from Sanity
  const topImageUrl = topImage ? urlFor(topImage).width(400).url() : null;
  const bottomImageUrl = bottomImage
    ? urlFor(bottomImage).width(600).url()
    : null;

  // Parse background color (supports hex or gradient)
  const bgStyle = backgroundColor?.includes("gradient")
    ? { backgroundImage: backgroundColor }
    : { backgroundColor };

  // Split title into words for Trail animation
  const titleWords = shortDescription?.split(" ") || [];

  return (
    <main
      className="flex w-screen min-h-screen items-center flex-col gap-10 xl:px-24 md:px-16 px-5 py-8"
      style={bgStyle}
    >
      <div className="flex flex-col gap-10 max-w-4xl w-full">
        {/* Back Button */}
        <Link href="/" className="mr-auto">
          <SlideLeft>
            <BgSpringAnim>
              <FaArrowLeft className="text-3xl" style={{ color: textColor }} />
            </BgSpringAnim>
          </SlideLeft>
        </Link>

        <div className="flex md:flex-row flex-col justify-between gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-10 w-1/2">
            {/* Top Image or Title as Logo */}
            <SlideLeft animRef={logoRef} direction="right">
              {topImageUrl ? (
                <Image
                  alt={`${title} logo`}
                  src={topImageUrl}
                  width={208}
                  height={100}
                  className="w-52 h-auto"
                />
              ) : (
                <div
                  className="font-bold md:text-4xl text-lg"
                  style={{ color: textColor }}
                >
                  {title}
                </div>
              )}
            </SlideLeft>

            {/* Project Title with External Link */}
            {externalLink ? (
              <Link href={externalLink} target="_blank">
                <div
                  className="underline underline-offset-2"
                  style={{ color: textColor }}
                >
                  <Trail animRef={titleRef}>
                    <span
                      className="font-medium text-3xl"
                      style={{ color: textColor }}
                    >
                      {shortDescription}{" "}
                    </span>
                  </Trail>
                </div>
              </Link>
            ) : (
              <div style={{ color: textColor }}>
                <Trail animRef={titleRef}>
                  <span
                    className="font-medium text-3xl"
                    style={{ color: textColor }}
                  >
                    {shortDescription}{" "}
                  </span>
                </Trail>
              </div>
            )}

            {/* Technologies Section */}
            {technologies && technologies.length > 0 && (
              <div className="flex flex-col gap-5">
                <SlideUp animRef={techTitleRef}>
                  <div
                    className="font-sans font-semibold text-sm max-w-md"
                    style={{ color: textColor }}
                  >
                    Technologies Used
                  </div>
                </SlideUp>
                <div className="flex gap-5 flex-wrap">
                  <Trail animRef={techRef}>
                    {technologies.map((tech) => {
                      const IconComponent = getIconComponent(tech.icon || "");
                      return IconComponent ? (
                        <IconComponent
                          className="text-3xl font-bold bg-blend-color-burn"
                          style={{ color: textColor }}
                          title={tech.name}
                        />
                      ) : null;
                    })}
                  </Trail>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col gap-5">
            <div
              className="font-sans md:text-lg text-sm max-w-md"
              style={{ color: textColor }}
            >
              {description}
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        {bottomImageUrl && (
          <div className="w-96 mx-auto mt-auto md:block hidden">
            <SlideUp animRef={logoBigRef}>
              <Image
                alt={`${title} screenshot`}
                src={bottomImageUrl}
                width={384}
                height={400}
                className="w-full h-auto"
              />
            </SlideUp>
          </div>
        )}
      </div>
    </main>
  );
}
