import Image from "next/image";
import raftlabsLogo from "../assets/raftlabs-logo.png";
export default function Experience() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl">
      <div className="font-medium text-2xl">Experience</div>
      <div className="flex flex-col gap-8 ">
        <div className="flex gap-8">
          <Image
            src={raftlabsLogo}
            alt="raftlabs_logo"
            width={0}
            height={0}
            className="w-16 h-fit"
          />
          <div className="flex flex-col gap-2">
            <div className="text-lg font-sans font-semibold">
              RaftLabs{" "}
              <span className="font-normal text-sm font-sans">
                (Feb 2023 - Present)
              </span>
            </div>
            <ul className="ml-3 list-disc flex flex-col gap-2">
              <li className="text-sm font-sans max-w-md">
                Collaborated on creating responsive and visually appealing UIs
                for client websites using Tailwind CSS, Ant Design, and Next.js.
              </li>
              <li className="text-sm font-sans max-w-md">
                Implemented GraphQL and Apollo Client to integrate UI components
                with the backend, ensuring seamless data communication and
                efficient rendering.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
