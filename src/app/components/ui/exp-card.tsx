import { animated, useInView } from "@react-spring/web";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface ExperienceProps {
  logo: StaticImageData;
  title: string;
  duration: string;
  orgLink: string;
  descList: string[];
}

export default function ExperienceCard({
  logo,
  title,
  duration,
  orgLink,
  descList,
}: ExperienceProps) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      once: true,
    }
  );
  return (
    <animated.div
      ref={ref}
      className="flex flex-wrap gap-8 rounded-xl bg-gray-100 p-5 w-fit "
      style={springs}
    >
      <Link href={orgLink} target="_blank" className="m-auto">
        <Image
          src={logo}
          alt={title + "_logo"}
          width={0}
          height={0}
          className="w-16 h-fit "
        />
      </Link>
      <div className="flex flex-col gap-2 ">
        <Link href={orgLink} target="_blank">
          <div className="text-base font-sans font-semibold hover:underline md:text-left text-center">
            {title}{" "}
            <span className="font-normal text-sm font-sans block">
              ({duration})
            </span>
          </div>
        </Link>
        <ul className="ml-3 list-disc flex flex-col gap-2">
          {descList.map((desc) => (
            <li key={desc} className="text-xs font-sans max-w-md">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </animated.div>
  );
}
