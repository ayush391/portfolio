import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Profile {
  _id: string;
  _type: "profile";
  name: string;
  firstName: string;
  lastName: string;
  bio: string;
  profileImage: SanityImageSource;
  resumeUrl: string;
}

export interface Project {
  _id: string;
  _type: "project";
  title: string;
  slug: {
    current: string;
  };
  description: string;
  topImage?: SanityImageSource;
  bottomImage: SanityImageSource;
  backgroundColor: string;
  externalLink?: string;
  technologies?: Technology[];
  order: number;
  featured: boolean;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  _id: string;
  _type: "experience";
  title: string;
  logo: SanityImageSource;
  orgLink: string;
  duration: string;
  descList: string[];
  order: number;
}

export interface SocialLink {
  _id: string;
  _type: "socialLinks";
  platform: string;
  url: string;
  icon: string;
  order: number;
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  footerCopyright: string;
  siteTitle: string;
  siteDescription: string;
}
