import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Fab Document",
      icon: "laptop-code",
      prefix: "fab/",
      link: "fab/",
      children: "structure",
    },
  ],
});
