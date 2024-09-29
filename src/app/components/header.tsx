import { RightCircleOutlined } from "@ant-design/icons";
import { useChain, useSpringRef } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import ayushDp from "../assets/ayush-dp.jpg";
import SlideLeft from "./anim/slide-left-anim";
import SlideUp from "./anim/slide-up-anim";
import Trail from "./anim/trail-anim";
import LINKS from "./info/links-info";
import Socials from "./socials";

export default function Header() {
  const dpRef = useSpringRef();
  const nameRef = useSpringRef();
  const bioRef = useSpringRef();
  useChain([nameRef, bioRef, dpRef], [0, 0.3, 0.8]);

  return (
    <div className="flex md:flex-row flex-col md:gap-10 gap-5 w-full max-w-4xl ">
      <SlideUp animRef={dpRef}>
        <Image
          src={ayushDp}
          alt="ayush_dp"
          width={0}
          height={0}
          className="rounded-full w-32 h-32 md:w-56 md:h-56 "
        />
      </SlideUp>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Trail animRef={nameRef}>
            <div className="font-medium text-4xl">Ayush</div>
            <div className="font-medium text-4xl">Kapoor</div>
          </Trail>
        </div>
        <SlideLeft animRef={bioRef}>
          <Link href={LINKS.RESUME} target="_blank">
            <span className="flex text-white items-center gap-2 font-sans font-semibold text-lg transition duration-300 ease-in-out hover:bg-blue-500 bg-blue-400 w-fit p-2 rounded">
              View My Resume
              <RightCircleOutlined />
            </span>
          </Link>
        </SlideLeft>
        <SlideLeft animRef={bioRef}>
          <div className="font-sans text-sm font-semibold max-w-xs">
            I’m a front-end developer who wants to help make the internet a more
            creative, accessible, and better place.
          </div>
        </SlideLeft>
        <Socials />
      </div>
    </div>
  );
}
