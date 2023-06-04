import Image, { StaticImageData } from "next/image";

export interface ExperienceProps {
  logo: StaticImageData;
  title: string;
  duration: string;
  descList: string[];
}

export default function ExperienceCard({
  logo,
  title,
  duration,
  descList,
}: ExperienceProps) {
  return (
    <div className="flex gap-8">
      <Image
        src={logo}
        alt={title + "_logo"}
        width={0}
        height={0}
        className="w-16 h-fit"
      />
      <div className="flex flex-col gap-2">
        <div className="text-lg font-sans font-semibold">
          {title}{" "}
          <span className="font-normal text-sm font-sans">({duration})</span>
        </div>
        <ul className="ml-3 list-disc flex flex-col gap-2">
          {descList.map((desc) => (
            <li key={desc} className="text-sm font-sans max-w-md">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
