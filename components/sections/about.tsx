"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { Code, Server, Globe, Cpu } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: Globe,
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    icon: Server,
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "GitHub Actions", "Linux"],
    icon: Cpu,
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman"],
    icon: Code,
  },
];

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TerminalWindow title="~/about/developer.info" className="mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 dark:text-green-400 light:text-green-600 font-bold">
                  user@portfolio:~$
                </span>
                <span className="text-white dark:text-white light:text-gray-800 font-semibold">
                  cat developer.info
                </span>
              </div>

              <div className="pl-4 space-y-4 text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-medium antialiased">
                <div>
                  <span className="text-amber-400 dark:text-amber-400 light:text-amber-600 font-bold">
                    Name:
                  </span>{" "}
                  <span className="text-white dark:text-white light:text-gray-800">
                    Full Stack Developer
                  </span>
                </div>
                <div>
                  <span className="text-amber-400 dark:text-amber-400 light:text-amber-600 font-bold">
                    Location:
                  </span>{" "}
                  <span className="text-white dark:text-white light:text-gray-800">
                    /home/developer
                  </span>
                </div>
                <div>
                  <span className="text-amber-400 dark:text-amber-400 light:text-amber-600 font-bold">
                    Shell:
                  </span>{" "}
                  <span className="text-white dark:text-white light:text-gray-800">
                    /bin/bash
                  </span>
                </div>
                <div>
                  <span className="text-amber-400 dark:text-amber-400 light:text-amber-600 font-bold">
                    Uptime:
                  </span>{" "}
                  <span className="text-white dark:text-white light:text-gray-800">
                    5+ years in software development
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-green-500/30 dark:border-green-400/30 light:border-green-600/30">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-green-400 dark:text-green-400 light:text-green-600 font-bold">
                    user@portfolio:~$
                  </span>
                  <span className="text-white dark:text-white light:text-gray-800 font-semibold">
                    ls -la /skills/
                  </span>
                </div>

                <div className="pl-4 space-y-2">
                  <div className="text-green-300 dark:text-green-300 light:text-green-700 text-sm font-mono">
                    total{" "}
                    {skills.reduce((acc, skill) => acc + skill.items.length, 0)}{" "}
                    packages
                  </div>
                  {skills.map((skill, index) => (
                    <div
                      key={skill.category}
                      className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-mono"
                    >
                      <span className="text-blue-400 dark:text-blue-400 light:text-blue-600 font-bold">
                        drwxr-xr-x
                      </span>{" "}
                      <span className="text-amber-400 dark:text-amber-400 light:text-amber-600 font-semibold">
                        {skill.category.toLowerCase()}/
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TerminalWindow
                title={`~/${skill.category.toLowerCase()}`}
                className="h-full"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <skill.icon className="w-5 h-5 text-green-400 dark:text-green-400 light:text-green-600" />
                    <span className="text-white dark:text-white light:text-gray-800 font-bold text-lg">
                      {skill.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div key={item} className="flex items-center space-x-2">
                        <span className="text-green-400 dark:text-green-400 light:text-green-600 font-bold">
                          →
                        </span>
                        <span className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 text-green-400 dark:text-green-400 light:text-green-600 px-2 py-1 rounded font-mono text-sm font-semibold">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
