import { defineConfig } from "vitepress"

const repoUrl = "https://github.com/medram/ui"
const repoBase = "/ui/"

export default defineConfig({
  title: "@medram/ui",
  description: "Reusable shadcn/ui component library for React and Next.js applications.",
  base: process.env.GITHUB_ACTIONS ? repoBase : "/",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/exports" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Getting started", link: "/guide/getting-started" },
            { text: "Styling", link: "/guide/styling" },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: [
            { text: "Exports", link: "/reference/exports" },
            { text: "Cloud storage", link: "/reference/cloud-storage" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: repoUrl }],
    editLink: {
      pattern: `${repoUrl}/edit/main/docs/:path`,
    },
    footer: {
      message: "Internal package. Usage requires package owner approval.",
      copyright: "Copyright © Medram",
    },
  },
})
