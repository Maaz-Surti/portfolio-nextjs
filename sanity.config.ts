import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schemas";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "9d7c0b7m",
  dataset: "production",
  title: "My personal website",
  apiVersion: "2023-05-14",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
