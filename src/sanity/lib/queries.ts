import { client } from "./client";
import type {
  Profile,
  Project,
  Experience,
  SocialLink,
  SiteSettings,
} from "./generated-types";

// Query to get profile data
export async function getProfile(): Promise<Profile | null> {
  const query = `*[_type == "profile"][0]{
    _id,
    _type,
    name,
    firstName,
    lastName,
    bio,
    profileImage,
    resumeUrl
  }`;

  return await client.fetch(query);
}

// Query to get all featured projects for homepage
export async function getAllProjects(): Promise<Project[]> {
  const query = `*[_type == "project" && featured == true && defined(order)] | order(order asc){
    _id,
    _type,
    title,
    shortDescription,
    textColor,
    "slug": slug.current,
    description,
    topImage,
    bottomImage,
    backgroundColor,
    externalLink,
    technologies[]{
      name,
      icon
    },
    order,
    featured
  }`;

  return await client.fetch(query);
}

// Query to get a single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    shortDescription,
    textColor,
    "slug": slug.current,
    description,
    topImage,
    bottomImage,
    backgroundColor,
    externalLink,
    technologies[]{
      name,
      icon
    },
    order,
    featured
  }`;

  return await client.fetch(query, { slug });
}

// Query to get all project slugs for static generation
export async function getAllProjectSlugs(): Promise<string[]> {
  const query = `*[_type == "project" && defined(slug.current)].slug.current`;

  return await client.fetch(query);
}

// Query to get all experiences
export async function getExperiences(): Promise<Experience[]> {
  const query = `*[_type == "experience" && defined(order)] | order(order asc){
    _id,
    _type,
    title,
    logo,
    orgLink,
    duration,
    descList,
    order
  }`;

  return await client.fetch(query);
}

// Query to get all social links
export async function getSocialLinks(): Promise<SocialLink[]> {
  const query = `*[_type == "socialLinks" && defined(order) ] | order(order asc){
    _id,
    _type,
    platform,
    url,
    icon,
    order
  }`;

  return await client.fetch(query);
}

// Query to get site settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  const query = `*[_type == "siteSettings"][0]{
    _id,
    _type,
    footerCopyright,
    siteTitle,
    siteDescription
  }`;

  return await client.fetch(query);
}
