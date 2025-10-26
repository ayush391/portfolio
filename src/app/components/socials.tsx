"use client";

import {
  CodeOutlined,
  FilePdfOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  RedditOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useChain, useSpringRef } from "@react-spring/web";
import Link from "next/link";
import type { SocialLink } from "@/sanity/lib/types";
import BgSpringAnim from "./anim/bg-spring-anim";
import Trail from "./anim/trail-anim";

interface SocialsProps {
  socialLinks: SocialLink[];
}

const iconMap: Record<string, React.ReactNode> = {
  GithubOutlined: <GithubOutlined className="text-2xl" />,
  LinkedinOutlined: <LinkedinOutlined className="text-2xl" />,
  MailOutlined: <MailOutlined className="text-2xl" />,
  CodeOutlined: <CodeOutlined className="text-2xl" />,
  FilePdfOutlined: <FilePdfOutlined className="text-2xl" />,
  InstagramOutlined: <InstagramOutlined className="text-2xl" />,
  RedditOutlined: <RedditOutlined className="text-2xl" />,
  TwitterOutlined: <TwitterOutlined className="text-2xl" />,
};

export default function Socials({ socialLinks }: SocialsProps) {
  const socialRef = useSpringRef();
  useChain([socialRef], [0.5]);

  return (
    <div className="flex gap-8 w-full max-w-4xl">
      <Trail animRef={socialRef}>
        {socialLinks.map((link) => (
          <Link key={link._id} href={link.url} target="_blank">
            <BgSpringAnim>{iconMap[link.icon] || null}</BgSpringAnim>
          </Link>
        ))}
      </Trail>
    </div>
  );
}
