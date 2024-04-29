export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  navItems: [
    {
      label: "首页",
      href: "/",
    },
    {
      label: "组内成员",
      href: "/members",
    },
    {
      label: "科研方向",
      href: "/research",
    },
    {
      label: "发表论文",
      href: "/publish",
    },
    {
      label: "团建活动",
      href: "/activity",
    }
  ],
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
