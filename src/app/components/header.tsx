"use client";

import { useChain, useSpringRef } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import SlideLeft from "./anim/slide-left-anim";
import SlideUp from "./anim/slide-up-anim";
import Trail from "./anim/trail-anim";
import Socials from "./socials";
import { Profile, SocialLinks } from "@/sanity/lib/sanity.types";
import { FaArrowRight } from "react-icons/fa";

interface HeaderProps {
  profile: Profile | null;
  socialLinks: SocialLinks[];
}

export default function Header({ profile, socialLinks }: HeaderProps) {
  const dpRef = useSpringRef();
  const nameRef = useSpringRef();
  const bioRef = useSpringRef();
  useChain([nameRef, bioRef, dpRef], [0, 0.3, 0.8]);
  if (!profile) throw new Error("Profile not found");
  return (
    <div className="flex md:flex-row flex-col md:gap-10 gap-5 w-full max-w-4xl ">
      <SlideUp animRef={dpRef}>
        <Image
          src={urlFor(profile.profileImage || "")
            .width(224)
            .height(224)
            .url()}
          alt={`${profile.firstName} ${profile.lastName}`}
          width={224}
          height={224}
          className="rounded-full w-32 h-32 md:w-56 md:h-56 object-cover"
        />
      </SlideUp>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Trail animRef={nameRef}>
            <div className="font-medium text-4xl">{profile.firstName}</div>
            <div className="font-medium text-4xl">{profile.lastName}</div>
          </Trail>
        </div>
        <SlideLeft animRef={bioRef}>
          <Link href={profile.resumeUrl || ""} target="_blank">
            <span className="flex text-white items-center gap-2 font-sans font-semibold text-lg transition duration-300 ease-in-out hover:bg-blue-500 bg-blue-400 w-fit p-2 rounded">
              View My Resume
              <FaArrowRight />
            </span>
          </Link>
        </SlideLeft>
        <SlideLeft animRef={bioRef}>
          <div className="font-sans text-sm font-semibold max-w-xs">
            {profile.bio}
          </div>
        </SlideLeft>
        <Socials socialLinks={socialLinks} />
      </div>
    </div>
  );
}
