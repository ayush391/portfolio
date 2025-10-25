"use client";

import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";
import HoverRise from "../anim/hover-rise-anim";

interface CardProps {
  title?: string;
  duration?: string;
  desc?: string[];
  topTitle?: string;
  topImg?: SanityImageSource;
  bottomImg: SanityImageSource;
  bgColor: string;
  bottomImageClassName?: string;
}

export default function Card({
  title,
  duration,
  desc,
  topTitle = "Project Title",
  topImg,
  bottomImg,
  bgColor,
  bottomImageClassName,
}: CardProps) {
  return (
    <HoverRise>
      <div
        style={{ background: bgColor }}
        className={`md:w-[300px] md:h-[400px] w-[200px] h-[300px] gap-10 flex flex-col justify-between items-center rounded-xl py-16 overflow-hidden`}
      >
        {topImg ? (
          <Image
            src={urlFor(topImg).width(176).url()}
            width={176}
            height={100}
            className="md:w-44 w-36"
            alt={title || "project logo"}
          />
        ) : (
          <div className="text-white md:text-xl text-lg">{topTitle}</div>
        )}
        <Image
          src={urlFor(bottomImg).width(224).url()}
          width={224}
          height={200}
          className={bottomImageClassName ?? "md:w-56 w-44"}
          alt={title || "project preview"}
        />
      </div>
    </HoverRise>
  );
}
