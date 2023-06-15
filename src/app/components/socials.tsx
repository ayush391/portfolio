import {
  CodeOutlined,
  FilePdfOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useChain, useSpringRef } from "@react-spring/web";
import Link from "next/link";
import BgSpringAnim from "./anim/bg-spring-anim";
import Trail from "./anim/trail-anim";
import LINKS from "./info/links-info";

export default function Socials() {
  const socialRef = useSpringRef();
  useChain([socialRef], [0.5]);
  return (
    <div className="flex gap-8 w-full max-w-4xl">
      <Trail animRef={socialRef}>
        <Link href={LINKS.GITHUB} target="_blank">
          <BgSpringAnim>
            <GithubOutlined className="text-2xl " />
          </BgSpringAnim>
        </Link>

        <Link href={LINKS.RESUME} target="_blank">
          <BgSpringAnim>
            <FilePdfOutlined className="text-2xl" />
          </BgSpringAnim>
        </Link>

        <Link href={LINKS.LINKEDIN} target="_blank">
          <BgSpringAnim>
            <LinkedinOutlined className="text-2xl" />
          </BgSpringAnim>
        </Link>

        <Link href={LINKS.LEETCODE} target="_blank">
          <BgSpringAnim>
            <CodeOutlined className="text-2xl" />
          </BgSpringAnim>
        </Link>

        <Link href={LINKS.MAIL} target="_blank">
          <BgSpringAnim>
            <MailOutlined className="text-2xl" />
          </BgSpringAnim>
        </Link>
      </Trail>
    </div>
  );
}
