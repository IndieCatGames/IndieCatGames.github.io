import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "Fab 文档",
      icon: "laptop-code",
      prefix: "fab/",
      link: "fab/",
      children: "structure",
    },
  ],
});
