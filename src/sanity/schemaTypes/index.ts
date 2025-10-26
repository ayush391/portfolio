import { type SchemaTypeDefinition } from "sanity";
import { profile } from "./profile";
import { project } from "./project";
import { experience } from "./experience";
import { socialLinks } from "./socialLinks";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, project, experience, socialLinks, siteSettings],
};
