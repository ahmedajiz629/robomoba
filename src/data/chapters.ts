export type Chapter = {
  id: string;
  number: string;
  title: string;
  path: string;
  promise: string;
};

export const chapters: Chapter[] = [
  {
    id: "system",
    number: "01",
    title: "System",
    path: "/system",
    promise: "The shared game boundary — not the robot.",
  },
  {
    id: "game",
    number: "02",
    title: "Game",
    path: "/game",
    promise: "How physical actions become match events.",
  },
  {
    id: "champions",
    number: "03",
    title: "Champions",
    path: "/champions",
    promise: "Three roles, three physical problems.",
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
