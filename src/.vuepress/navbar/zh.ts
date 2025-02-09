import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/fab/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/zh/",
    children: [
    ],
  }
]);
