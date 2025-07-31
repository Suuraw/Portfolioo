"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Folder } from "lucide-react"
import { TerminalWindow } from "@/components/ui/terminal-window"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <TerminalWindow title="~/projects/list.sh">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 dark:text-green-400 light:text-green-600 font-bold">
                  user@portfolio:~$
                </span>
                <span className="text-white dark:text-white light:text-gray-800 font-semibold">
                  find ./projects -type f -name "*.project" | wc -l
                </span>
              </div>
              <div className="pl-4 text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-semibold">
                {projects.length} projects found
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 dark:text-green-400 light:text-green-600 font-bold">
                  user@portfolio:~$
                </span>
                <span className="text-white dark:text-white light:text-gray-800 font-semibold">ls -la ./projects/</span>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <TerminalWindow
                title={`~/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="h-full transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl bg-black dark:bg-black light:bg-white border-green-500 dark:border-green-400 light:border-green-600"
              >
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-center space-x-2">
                    <Folder className="w-5 h-5 text-amber-400 dark:text-amber-400 light:text-amber-600" />
                    <h3 className="text-white dark:text-white light:text-gray-800 font-bold text-xl">
                      {project.title}
                    </h3>
                  </div>

                  {/* Terminal Command */}
                  <div className="text-sm mb-2 font-mono">
                    <span className="text-green-400 dark:text-green-400 light:text-green-600">user@projects:~$</span>
                    <span className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 ml-2">
                      {project.title.toLowerCase().replace(/\s+/g, "-")} --start
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white dark:text-white light:text-gray-800 text-sm leading-relaxed font-medium antialiased opacity-100">
                    {project.description}
                  </p>

                  {/* Tags as CLI Flags */}
                  <div className="space-y-2">
                    <div className="text-amber-400 dark:text-amber-400 light:text-amber-600 text-sm font-semibold">
                      Dependencies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 text-green-400 dark:text-green-400 light:text-green-600 px-2 py-1 text-xs font-mono rounded border border-green-700 dark:border-green-600 light:border-green-500 font-semibold"
                        >
                          --{tag.toLowerCase().replace(/\s+/g, "-")}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-green-500/30 dark:border-green-400/30 light:border-green-600/30">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm transition-colors duration-200 text-cyan-400 dark:text-cyan-400 light:text-cyan-600 hover:text-cyan-300 dark:hover:text-cyan-300 light:hover:text-cyan-500 font-semibold underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.devLink && (
                      <a
                        href={project.devLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm transition-colors duration-200 text-yellow-400 dark:text-yellow-400 light:text-yellow-600 hover:text-yellow-300 dark:hover:text-yellow-300 light:hover:text-yellow-500 font-semibold underline"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
