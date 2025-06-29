interface Project {
  title: string
  description: string
  tags: string[]
  liveLink: string
  devLink: string
}

const projects: Project[] = [
  {
    title: "ApplySmart",
    description: "ATS based platform which analysis resume and automate job form filling",
    tags: ["Next.js", "MongoDB", "Aws","NodeJs","FireBase","Prisma"],
    liveLink: "https://apply-smart-kappa.vercel.app",
    devLink: "https://github.com/Suuraw/ApplySmart",
  },
  {
    title: "E-Cell Cohort",
    description: "A Learning website for new E-cell members",
    tags: ["React", "NodeJs", "MongoDb", "Excel Sheet API"],
    liveLink: "https://ecohort.vercel.app/",
    devLink: "https://github.com/Suuraw/E-cell-Cohort",
  },
  {
    title: "Todo Agent",
    description: "Agent that helps manage tasks within team just via prompt",
    tags: ["GCP", "MongoDB","NodeJs","React+Vite"],
    liveLink: "https://todoagent.vercel.app/",
    devLink: "https://github.com/Suuraw/ToDo-Agent-Frontend",
  }
]

export default projects;
