import Image, { StaticImageData } from "next/image";
import HoverRise from "../anim/hover-rise-anim";

interface CardProps {
  title?: string;
  duration?: string;
  desc?: string[];
  topTitle?: string;
  topImg?: StaticImageData | string;
  bottomImg: StaticImageData | string;
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
        className={`w-[300px] h-[400px] gap-10 flex flex-col justify-between items-center rounded-xl py-16 overflow-hidden`}
      >
        {topImg ? (
          <Image
            src={topImg}
            width={0}
            height={0}
            className="w-44 "
            alt="aldifest_logo"
          ></Image>
        ) : (
          <div className="text-white text-xl">{topTitle}</div>
        )}
        <Image
          src={bottomImg}
          width={0}
          height={0}
          className={bottomImageClassName ?? "w-56 "}
          alt="aldifest_logo"
        ></Image>
      </div>
    </HoverRise>
  );
}
