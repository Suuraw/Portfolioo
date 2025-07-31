export interface Project {
  title: string
  description: string
  tags: string[]
  liveLink: string | null
  devLink: string | null
}

export const projects: Project[] = [
  {
    title: "Watch2Learn",
    description:
      "YouTube transcript productivity tool that transforms video content into structured learning materials with AI-powered summarization and note-taking features.",
    tags: ["Next.js", "TypeScript", "OpenAI", "YouTube API", "Tailwind"],
    liveLink: "https://watch2learn.dev",
    devLink: "https://github.com/Suuraw/watch2learn",
  },
  {
    title: "ApplySmart",
    description:
      "ATS optimization platform that analyzes resumes against job descriptions, providing actionable insights to improve application success rates.",
    tags: ["React", "Python", "FastAPI", "ML", "PostgreSQL"],
    liveLink: "https://applysmart.io",
    devLink: "https://github.com/Suuraw/applysmart",
  },
  {
    title: "Renewable Energy Market Risk Index",
    description:
      "Research data pipeline analyzing market volatility and risk factors in renewable energy investments using advanced statistical models.",
    tags: ["Python", "Pandas", "NumPy", "Apache Airflow", "PostgreSQL"],
    liveLink: null,
    devLink: "https://github.com/Suuraw/energy-risk-index",
  },
  {
    title: "Blog Post Synchronization Pipeline",
    description:
      "GitHub Actions workflow that automatically synchronizes blog posts across multiple platforms with content validation and formatting.",
    tags: ["GitHub Actions", "Node.js", "Markdown", "API Integration"],
    liveLink: null,
    devLink: "https://github.com/Suuraw/blog-sync-pipeline",
  },
  {
    title: "Project Description Generation Pipeline",
    description:
      "Automated documentation system that generates comprehensive project descriptions from codebase analysis and commit history.",
    tags: ["Python", "OpenAI", "Git", "CI/CD", "Documentation"],
    liveLink: null,
    devLink: "https://github.com/Suuraw/project-docs-generator",
  },
  {
    title: "E-Cell Cohort Learning Platform",
    description:
      "Educational web platform facilitating collaborative learning experiences for entrepreneurship students with interactive modules and progress tracking.",
    tags: ["Next.js", "MongoDB", "Socket.io", "Chart.js", "Authentication"],
    liveLink: "https://ecell-platform.edu",
    devLink: "https://github.com/Suuraw/ecell-platform",
  },
  {
    title: "Todo Agent",
    description:
      "AI-powered task management system that intelligently categorizes, prioritizes, and schedules tasks based on user behavior and preferences.",
    tags: ["React", "Node.js", "OpenAI", "MongoDB", "Machine Learning"],
    liveLink: "https://todo-agent.app",
    devLink: "https://github.com/Suuraw/todo-agent",
  },
]
