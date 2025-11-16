import { defineConfig } from "tinacms";
import schema from "./schema";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Tina Cloud credentials
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  // Required build config for Tina admin
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  schema
});
