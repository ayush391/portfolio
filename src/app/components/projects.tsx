import Image from "next/image";
import aldiLogo from "../assets/aldi-logo.png";
import aldiLogoBig from "../assets/aldifest_2023.webp";
export default function Projects() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl">
      <div className="font-medium text-2xl">Projects</div>
      <div className="flex flex-nowrap gap-8 ">
        <div className="w-[300px] h-[400px] bg-[#3AC9F7] flex flex-col justify-between items-center rounded-xl py-16">
          <Image
            src={aldiLogo}
            width={0}
            height={0}
            className="w-44"
            alt="aldifest_logo"
          ></Image>
          <Image
            src={aldiLogoBig}
            width={0}
            height={0}
            className="w-56"
            alt="aldifest_logo"
          ></Image>
        </div>
      </div>
    </div>
  );
}
