export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string | null;
  devLink: string | null;
}

export const projects: Project[] = [
  {
    title: "Generate Folder Tree",
    description:
      "A VS Code extension that automates folder and file structure generation from markdown-style or indented input. It supports multiple tree syntaxes for fast, customizable project scaffolding. With 100+ downloads and ranked #1 in its category on the VS Code Marketplace.",
    tags: ["Vs-code Extension", "JavaScript", "Regex", "Vs-code API", "Node"],
    liveLink:
      "https://marketplace.visualstudio.com/items?itemName=Suuraw.generate-folder-tree",
    devLink: "https://github.com/Suuraw/Generate-Folder-Tree",
  },
  {
    title: "Watch2Learn",
    description:
      "YouTube transcript productivity tool that transforms video content into structured learning materials with AI-powered summarization and note-taking features.",
    tags: ["Next.js", "TypeScript", "OpenAI", "YouTube API", "Tailwind"],
    liveLink: "https://watch2learn.app",
    devLink: "https://github.com/Suuraw/Transcriber",
  },
  {
    title: "ApplySmart",
    description:
      "ATS optimization platform that analyzes resumes against job descriptions, providing actionable insights to improve application success rates.",
    tags: [
      "Next.js",
      "Python",
      "Express",
      "ML",
      "PostgreSQL",
      "Firebase",
      "Prisma",
    ],
    liveLink: "https://applysmart.me",
    devLink: "https://github.com/Suuraw/applysmart",
  },
  {
    title: "Renewable Energy Market Risk Index",
    description:
      "Collaborated with PhD students to develop a proxy index for renewable energy market trends using a data pipeline.",
    tags: [
      "Research Intern",
      "IIT-KGP",
      "Python",
      "Pandas",
      "NumPy",
      "GenAi-usecases",
      "Scopus",
      "PostgreSQL",
    ],
    liveLink: null,
    devLink: null,
  },
  {
    title: "Blog Post Synchronization Pipeline",
    description:
      "GitHub Actions workflow that automatically synchronizes blog posts across multiple platforms with content validation and formatting.",
    tags: ["GitHub Actions", "Node.js", "Markdown", "API Integration"],
    liveLink: null,
    devLink: "https://github.com/Suuraw/Blogs",
  },
  {
    title: "Project Description Generation Pipeline",
    description:
      "Automated documentation system that generates comprehensive project descriptions from codebase analysis and commit history.",
    tags: ["Python", "OpenAI", "Git", "CI/CD", "Documentation"],
    liveLink: null,
    devLink: "https://github.com/Suuraw/project_section_automation_test",
  },
  {
    title: "E-Cell Cohort Learning Platform",
    description:
      "Educational web platform facilitating collaborative learning experiences for entrepreneurship students with interactive modules and progress tracking.",
    tags: ["Next.js", "MongoDB", "Socket.io", "Chart.js", "Authentication"],
    liveLink: "https://ecohort.vercel.app/",
    devLink: "https://github.com/Suuraw/E-cell-Cohort",
  },
  {
    title: "Todo Agent",
    description:
      "AI-powered task management system that intelligently categorizes, prioritizes, and schedules tasks based on user behavior and preferences.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB", "Machine Learning"],
    liveLink: "https://todoagent.vercel.app/",
    devLink: "https://github.com/Suuraw/ToDo-Agent-Frontend",
  },
];
