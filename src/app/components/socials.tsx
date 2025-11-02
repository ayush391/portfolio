"use client";

import { SocialLinks } from "@/sanity/lib/sanity.types";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaFilePdf,
  FaInstagram,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import { useChain, useSpringRef } from "@react-spring/web";
import Link from "next/link";
import BgSpringAnim from "./anim/bg-spring-anim";
import Trail from "./anim/trail-anim";

interface SocialsProps {
  socialLinks: SocialLinks[];
}

const iconMap: Record<string, React.ReactNode> = {
  GithubOutlined: <FaGithub className="text-2xl" />,
  LinkedinOutlined: <FaLinkedin className="text-2xl" />,
  MailOutlined: <FaEnvelope className="text-2xl" />,
  CodeOutlined: <FaCode className="text-2xl" />,
  FilePdfOutlined: <FaFilePdf className="text-2xl" />,
  InstagramOutlined: <FaInstagram className="text-2xl" />,
  RedditOutlined: <FaReddit className="text-2xl" />,
  TwitterOutlined: <FaTwitter className="text-2xl" />,
};

export default function Socials({ socialLinks }: SocialsProps) {
  const socialRef = useSpringRef();
  useChain([socialRef], [0.5]);

  return (
    <div className="flex gap-8 w-full max-w-4xl">
      <Trail animRef={socialRef}>
        {socialLinks.map((link) => (
          <Link key={link._id} href={link.url || ""} target="_blank">
            <BgSpringAnim>{iconMap[link.icon || ""] || null}</BgSpringAnim>
          </Link>
        ))}
      </Trail>
    </div>
  );
}
