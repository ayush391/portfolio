import { getAllProjectSlugs, getProjectBySlug } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./project-detail-client";

// Generate static params for all project slugs
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Revalidate every hour (3600 seconds)
export const revalidate = 3600;

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
