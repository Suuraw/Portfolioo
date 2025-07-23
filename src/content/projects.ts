interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string | null;
  devLink: string | null;
}

const projects: Project[] = [
  {
  title: "Watch2Learn",
  description:
    "A productivity tool that fetches YouTube video transcripts, generates detailed summaries of long-form content, and creates knowledge-testing questionnaires powered by Gemini GenAI—helping users efficiently learn from hours of video content.",
  tags: ["next-js", "docker", "fastapi", "python", "gemini-genai"],
  liveLink: "https://www.watch2learn.app/",
  devLink: "https://github.com/Suuraw/Transcript-backend",
},

  {
    title: "ApplySmart",
    description:
      "An ATS-optimized platform that analyzes resumes and automates job application form filling, streamlining the job search process for users.",
    tags: ["next-js", "mongodb", "aws", "node-js", "firebase", "prisma"],
    liveLink: "https://www.applysmart.me/",
    devLink: "https://github.com/Suuraw/ApplySmart",
  },
  
  {
    title: "Renewable Energy Market Risk Index",
    description:
      "Built a proxy index to assess renewable energy market risks using generative AI to generate signaling keywords. Integrated into a data pipeline to scrape the Scopus database, with results exported to Excel and visualized for trend analysis.",
    tags: [
      "research",
      "data-pipeline",
      "scopus",
      "python",
      "excel",
      "generative-ai",
    ],
    liveLink: null,
    devLink: null,
  },
  {
    title: "Blog Post Synchronization Pipeline",
    description:
      "A GitHub Actions workflow that seamlessly syncs Markdown blog posts from a Blogs repository to the `Suuraw/Portfolioo` repository on `.md` file push events, automating content updates for the portfolio.",
    tags: ["github-actions", "yaml", "ci-cd", "content-automation", "markdown"],
    liveLink: null,
    devLink: "https://github.com/Suuraw/Blogs",
  },
  {
    title: "Project Description Generation Pipeline",
    description:
      "A GitHub Actions workflow that generates concise project descriptions for a GitHub user's repositories using the GitHub API and Google Generative AI, storing them in a JSON file and committing changes via a bot.",
    tags: ["github-actions", "generative-ai", "ci-cd", "portfolio-automation"],
    liveLink: null,
    devLink: "https://github.com/Suuraw/project_section_automation_test",
  },
  {
    title: "E-Cell Cohort Learning Platform",
    description:
      "A web platform designed for E-Cell members, offering educational resources and interactive tools to facilitate onboarding and learning.",
    tags: ["react", "node-js", "mongodb", "excel-sheet-api"],
    liveLink: "https://ecohort.vercel.app",
    devLink: "https://github.com/Suuraw/E-cell-Cohort",
  },
  {
    title: "Todo Agent",
    description:
      "A task management agent that simplifies team collaboration by enabling task creation and tracking through intuitive prompts.",
    tags: ["gcp", "mongodb", "node-js", "react-vite"],
    liveLink: "https://todoagent.vercel.app",
    devLink: "https://github.com/Suuraw/ToDo-Agent-Frontend",
  },
];

export default projects;
