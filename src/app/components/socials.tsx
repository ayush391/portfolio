import {
  CodeOutlined,
  FilePdfOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import BgSpringAnim from "./anim/bg-spring-anim";
import LINKS from "./links";

export default function Socials() {
  return (
    <div className="flex gap-8 w-full max-w-4xl">
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
    </div>
  );
}
