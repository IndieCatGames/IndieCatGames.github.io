import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/fab/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/",
    children: [
    ],
  },
]);
