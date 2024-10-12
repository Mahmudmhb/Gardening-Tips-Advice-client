export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "News-feed",
      href: "/",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "About Us",
      href: "/about-us",
    },

    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Found Items",
      href: "/found-items",
    },
  ],
};
