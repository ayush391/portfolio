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
        className={`md:w-[300px] md:h-[400px] w-[200px] h-[300px] gap-10 flex flex-col justify-between items-center rounded-xl py-16 overflow-hidden`}
      >
        {topImg ? (
          <Image
            src={topImg}
            width={0}
            height={0}
            className="md:w-44 w-36"
            alt="aldifest_logo"
          ></Image>
        ) : (
          <div className="text-white md:text-xl text-lg">{topTitle}</div>
        )}
        <Image
          src={bottomImg}
          width={0}
          height={0}
          className={bottomImageClassName ?? "md:w-56 w-44"}
          alt="aldifest_logo"
        ></Image>
      </div>
    </HoverRise>
  );
}
