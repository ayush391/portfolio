import {
  CodeOutlined,
  FilePdfOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function Socials() {
  return (
    <div className="flex gap-8 w-full max-w-4xl">
      <GithubOutlined className="text-2xl" />
      <FilePdfOutlined className="text-2xl" />
      <LinkedinOutlined className="text-2xl" />
      <CodeOutlined className="text-2xl" />
      <MailOutlined className="text-2xl" />
    </div>
  );
}
