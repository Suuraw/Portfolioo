"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { ChevronRight } from "lucide-react";

export function Hero() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  const asciiArt = `
 ███████╗██╗   ██╗     ██╗ █████╗ ██╗   ██╗    ██╗  ██╗██╗   ██╗███╗   ███╗ █████╗ ██████╗ 
 ██╔════╝██║   ██║     ██║██╔══██╗╚██╗ ██╔╝    ██║ ██╔╝██║   ██║████╗ ████║██╔══██╗██╔══██╗
 ███████╗██║   ██║     ██║███████║ ╚████╔╝     █████╔╝ ██║   ██║██╔████╔██║███████║██████╔╝
 ╚════██║██║   ██║██   ██║██╔══██║  ╚██╔╝      ██╔═██╗ ██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗
 ███████║╚██████╔╝╚█████╔╝██║  ██║   ██║       ██║  ██╗╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║
 ╚══════╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
  `;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20, height: "200px" }} // Start with a compact height
          animate={{ opacity: 1, y: 0, height: "auto" }} // Expand to natural height
          transition={{
            opacity: { duration: 0.8 },
            y: { duration: 0.8 },
            height: { duration: 1, ease: "easeOut", type: "tween" }, // Smooth height transition
          }}
          layout // Enable layout animations for dynamic content changes
        >
          <TerminalWindow title="~/portfolio/welcome.sh" className="w-full">
            <div className="space-y-4">
              {/* ASCII Art - Fixed visibility */}
              <pre className="text-green-500 dark:text-green-400 light:text-green-600 text-xs sm:text-sm overflow-x-auto font-bold">
                {asciiArt}
              </pre>

              {/* Welcome Message */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 dark:text-green-400 light:text-green-600 font-bold">
                    sujay@portfolio:~$
                  </span>
                  <TypingAnimation
                    text="whoami"
                    speed={100}
                    onComplete={() => setShowPrompt(true)}
                    className="text-white dark:text-white light:text-gray-800 font-semibold"
                  />
                </div>

                {showPrompt && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pl-4"
                    layout // Smooth layout transition for this section
                  >
                    <TypingAnimation
                      text="Full Stack Developer | Linux Enthusiast | Open Source Contributor"
                      speed={30}
                      onComplete={() => setShowSecondLine(true)}
                      className="text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-semibold"
                    />
                  </motion.div>
                )}

                {showSecondLine && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                    layout // Smooth layout transition for this section
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 dark:text-green-400 light:text-green-600 font-bold">
                        sujay@portfolio:~$
                      </span>
                      <TypingAnimation
                        text="cat /home/sujay/bio.txt"
                        speed={50}
                        className="text-white dark:text-white light:text-gray-800 font-semibold"
                      />
                    </div>
                    <div className="pl-4 text-amber-400 dark:text-amber-400 light:text-amber-600 font-medium">
                      <p>
                        Building scalable web applications with modern
                        technologies.
                      </p>
                      <p>
                        Passionate about clean code, system architecture, and
                        developer tools.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Navigation Hint */}
              {showSecondLine && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="pt-6 border-t border-green-500/30 dark:border-green-400/30 light:border-green-600/30"
                  layout // Smooth layout transition for this section
                >
                  <div className="flex items-center space-x-2 text-green-300 dark:text-green-300 light:text-green-700">
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-sm font-mono">
                      Use navigation above or scroll to explore
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
