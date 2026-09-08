export type Chapter = {
  id: string;
  number: string;
  title: string;
  path: string;
  promise: string;
};

export const chapters: Chapter[] = [
  {
    id: "game",
    number: "01",
    title: "Game",
    path: "/game",
    promise: "HP, Mana, Charge, cooldowns, spawn, and the Nexus.",
  },
  {
    id: "system",
    number: "02",
    title: "Robot structure",
    path: "/system",
    promise: "How the robot is wired — who owns actuators vs sensors.",
  },
  {
    id: "champions",
    number: "03",
    title: "Champions",
    path: "/champions",
    promise: "Three interfaces, three weapons — and physical mines.",
  },
  {
    id: "arena",
    number: "04",
    title: "Arena",
    path: "/arena",
    promise: "Lanes, jungle, and the battlefield itself.",
  },
  {
    id: "server",
    number: "05",
    title: "Server",
    path: "/server",
    promise: "The electronic referee and what stays private.",
  },
  {
    id: "development",
    number: "06",
    title: "Development",
    path: "/development",
    promise: "How teams build before the official match.",
  },
  {
    id: "roadmap",
    number: "07",
    title: "Roadmap",
    path: "/roadmap",
    promise: "Six months to a reliable first edition.",
  },
];

export function getChapter(id: string) {
  const index = chapters.findIndex((c) => c.id === id);
  return {
    current: chapters[index],
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
    index,
  };
}
