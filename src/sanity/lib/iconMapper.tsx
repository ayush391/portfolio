import { IconType } from "react-icons";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaGitAlt, 
  FaAws,
  FaVuejs,
  FaAngular,
  FaSass,
  FaFigma,
  FaLinux,
} from "react-icons/fa";
import { 
  GrReactjs, 
  GrGraphQl 
} from "react-icons/gr";
import { 
  SiAntdesign, 
  SiFigma, 
  SiMaterialdesign,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiPrisma,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiRedux,
  SiReactquery,
  SiStyledcomponents,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiJest,
  SiCypress,
  SiStorybook,
  SiGraphql,
} from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandMongodb,
  TbBrandReact,
  TbBrandVue,
  TbBrandAngular,
  TbBrandDocker,
  TbBrandGit,
  TbBrandFirebase,
} from "react-icons/tb";
import { FiFramer } from "react-icons/fi";

// Map of icon identifiers to React Icon components
export const iconMap: Record<string, IconType> = {
  // React Icons - Fa (Font Awesome)
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaVuejs,
  FaAngular,
  FaSass,
  FaFigma,
  FaLinux,

  // React Icons - Gr
  GrReactjs,
  GrGraphQl,

  // React Icons - Si (Simple Icons)
  SiAntdesign,
  SiFigma,
  SiMaterialdesign,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiPrisma,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiRedux,
  SiReactquery,
  SiStyledcomponents,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiJest,
  SiCypress,
  SiStorybook,
  SiGraphql,

  // React Icons - Tb (Tabler Icons)
  TbBrandFramerMotion,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandMongodb,
  TbBrandReact,
  TbBrandVue,
  TbBrandAngular,
  TbBrandDocker,
  TbBrandGit,
  TbBrandFirebase,

  // React Icons - Fi (Feather Icons)
  FiFramer,
};

// Get icon component by identifier string
export function getIconComponent(iconIdentifier: string): IconType | null {
  return iconMap[iconIdentifier] || null;
}
