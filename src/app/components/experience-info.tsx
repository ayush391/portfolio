import raftlabsLogo from "../assets/raftlabs-logo.png";
import exposysLogo from "../assets/robots.png";
import { ExperienceProps } from "./ui/exp-card";

const EXPERIENCE_ITEMS: ExperienceProps[] = [
  {
    logo: raftlabsLogo,
    title: "Raftlabs",
    duration: "Feb 2023 - Present",
    descList: [
      "Collaborated on creating responsive and visually appealing UIs for client websites using Tailwind CSS, Ant Design, and Next.jss",
      "Implemented GraphQL and Apollo Client to integrate UI components with the backend, ensuring seamless data communication and efficient rendering.",
    ],
  },
  {
    logo: exposysLogo,
    title: "Exposys Data Labs",
    duration: "Sep 2021 - Oct 2021",
    descList: [
      "Contributed to the development of a peer-to-peer video conferencing feature, enhancing user experience      and optimizing performance.",
    ],
  },
];

export default EXPERIENCE_ITEMS;
