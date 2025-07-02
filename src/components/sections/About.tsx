import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-purple-blue text-2xl">About Me</h2>
        <Card className="p-6 bg-card border-card-border">
          <p className="mb-4">$ cat about.txt</p>
          <div className="text-green">
            <ul className="flex flex-col gap-2">
              <li>
                🎓 I'm an undergraduate at{" "}
                <span className="text-blue">KIIT University</span> studying
                Computer Science and Engineering
              </li>
              <li>
                💻 I'm passionate about{" "}
                <span className="text-blue">MERN Stack</span> and{" "}
                <span className="text-blue">DevOps</span>
              </li>
              <li>
                👨‍💻 Most of my experience is in{" "}
                <span className="text-blue">full stack development</span> and{" "}
                <span className="text-blue">web technologies</span>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-blue">Experience:</p>
          <ul className="list-disc list-inside mt-2 text-purple">
            <li>
              Summer Internship @ IIT Kharagpur - Worked on quantifying
              renewable energy market risk using proxy index development,,
              working paper
            </li>
            <li>Web Development Intern @ KIIT E-Cell</li>
            <li>
              Full Stack Developer @{" "}
              <Link className="text-blue underline" href="https://banao.tech/">
                Banao Technologies
              </Link>
            </li>
            <li>
              Developed{" "}
              <Link
                className="text-blue underline"
                href="https://github.com/Suuraw"
              >
                E-Cell Cohort Platform
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-blue">Skills:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              JavaScript
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              TypeScript
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              React.js
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              Node.js
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              MongoDB
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              Go
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              Docker
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              AWS
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              ORM (Prisma)
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              Java
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              GCP
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              Supabase
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              Firebase
            </span>
            <span className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md text-sm">
              Github Actions
            </span>
          </div>
          <p className="mt-4 text-blue">Achievements:</p>
          <ul className="list-disc list-inside mt-2 text-purple">
            <li>National Basketball Player</li>
            <li>Smart India Hackathon 2024 - Top 50</li>
          </ul>
        </Card>
      </div>
    </>
  );
}
