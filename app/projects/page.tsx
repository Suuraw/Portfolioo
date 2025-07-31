"use client"

import { motion } from "framer-motion"
import { Projects } from "@/components/sections/projects"
import { TerminalWindow } from "@/components/ui/terminal-window"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 terminal-glow">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <TerminalWindow title="~/projects/showcase.sh" className="glow-border">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-400 dark:text-green-400 light:text-green-600 font-bold glow-text">
                  sujay@portfolio:~$
                </span>
                <span className="text-white dark:text-white light:text-gray-900 font-semibold">
                  echo "Welcome to my project showcase"
                </span>
              </div>
              <div className="pl-4 text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-semibold">
                Showcasing full-stack applications, AI tools, and developer utilities
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 dark:text-green-400 light:text-green-600 font-bold glow-text">
                  sujay@portfolio:~$
                </span>
                <span className="text-white dark:text-white light:text-gray-900 font-semibold">
                  ./deploy --production --showcase
                </span>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>

      <Projects />
    </div>
  )
}
