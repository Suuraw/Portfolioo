"use client";

import { motion } from "framer-motion";
import { About } from "@/components/sections/about";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function AboutPage() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Suuraw",
      icon: Github,
      command: "curl -L github.com/suuraw",
      color: "text-purple-400 dark:text-purple-400 light:text-purple-600",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sujay-kumar-4b85b5252/",
      icon: Linkedin,
      command: "ssh linkedin.com/in/sujay-kumar",
      color: "text-blue-400 dark:text-blue-400 light:text-blue-600",
    },
    {
      name: "Email",
      url: "mailto:sujayraw13@gmail.com",
      icon: Mail,
      command: "mail sujayraw13@gmail.com",
      color: "text-red-400 dark:text-red-400 light:text-red-600",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TerminalWindow
            title="~/about/sujay-kumar.sh"
            className="glow-border"
          >
            <div className="space-y-4">
              {/* whoami */}
              <div className="flex items-center space-x-2">
                <span className="text-green-400 font-bold glow-text">
                  sujay@portfolio:~$
                </span>
                <span className="text-white font-semibold">whoami</span>
              </div>
              <div className="pl-4 text-cyan-400 font-semibold">
                Full-stack dev | AI/ML Explorer | DevOps Enthusiast
              </div>

              {/* echo */}
              <div className="flex items-center space-x-2">
                <span className="text-green-400 font-bold glow-text">
                  sujay@portfolio:~$
                </span>
                <span className="text-white font-semibold">
                  echo "Welcome to my project showcase"
                </span>
              </div>
              <div className="pl-4 text-amber-400 font-semibold">
                Showcasing full-stack applications, AI tools, and developer
                utilities
              </div>

              {/* contact.txt */}
              <div className="flex items-center space-x-2">
                <span className="text-green-400 font-bold glow-text">
                  sujay@portfolio:~$
                </span>
                <span className="text-white font-semibold">
                  cat /home/sujay/contact.txt
                </span>
              </div>

              {/* Social Links */}
              <div className="pl-4 space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 ${link.color} font-semibold hover:glow-text transition-all duration-300 group-hover:scale-105`}
                    >
                      <span className="text-green-400">$</span>
                      <link.icon className="w-4 h-4" />
                      <span className="font-mono">{link.command}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Batman ASCII */}
              <div className="pt-6 border-t border-green-500/40 dark:border-green-400/40 light:border-green-600/40">
                <pre className="text-green-400 text-xs font-mono font-bold glow-text text-center">
                  {`                                                                                                                                                                                                                 
                                                         -.@@                                                                     
                                                      +@@@@@@@@.                                                                  
                                                     @@@@@@@@@**%@                                                                
                                                    -@@@@@@@@@@#@@@                                                               
                                                    %@@@@@@@@@%##***@                                                             
                                                    -@@@@@@*@@@@%**@..                                                            
                                                      @@@@@#@*###%%#@                                                             
                                                       -@@@%@@@@@@@@@                                                             
                                                         +@##*@#@@                                                                
                                                         @==#@*#@.                                                                
                                                       =@#-:#+##@%                                                                
                                                      @@----@:=%@%@                                                               
                                                     #-#%##--@%-=+-%              .@+#@@*+.                                       
                                                     +#=--*++@#=---=+           :@**-:+-=%%@:                                     
                                                    --%--=+*@=#+---%@           @***==%*%=++@*                                    
                                                    %*==+-@-#=@@*-:%=          -#+====@*#+*#@+                                    
                                                   .#%--*@@-@=@*#-:%:+         *@%@@@=+%=@=+@                                     
                                                   #=@@*:=@-:@@**-:%=@          @@#++*%+@++@+                                     
                                                   @-@@-:-==::@@@+-*+@           @@*@++*%+@                                       
                                                  :@-@#=-:-==:=*=#@-+%.         :%#@@%%@+.                                        
                                                  @@=@*-:::+*=:@+*-:+***##****#####@:: .                                          
                                                  @#==@@@@@@@@@%*+-:#*@@@%@@@@@+:                                                 
                                                  +*++#####@*@++#*-:@+@@@@                                                        
                                                  -*=+@@###*@:=@+#--+=+                                                           
                                                  +@-=+@####=@+-#=-=:--                                                           
                                                  @-@-=@@%##*@#+=-##-%                                                            
                                                    %+@@@@%##@@*@@@%@@.                                                           
                                                   .@@@@+@#-:. @%@@#+@                                                            
                                                   @-@#*##.:=:# @+-*+#                                                            
                                                   @-@#-#+@ :--+.*+:=-.                                                           
                                                   @-#*=#+%@ :*: ++=-:#                                                           
                                                  -%-+===+@+@.---@@==:@                                                           
                                                  %@-=====%+=@=::  *+=#                                                           
                                                  @@-==*+=#++@.:%+.*@*=                                                           
                                                  %@-+-===*==:@@@@@@*#-                                                           
                                                  :@-++-==-+=+@@@@@@+#-=                                                          
                                                   @-+#===%+=+@=*##%%#=%                                                          
                                                   %-=%=+=%+===--==-@#=@                                                          
                                                   %=-==++%-+++@-++=@#=%                                                          
                                                   ##-====%-===+==+*@#=%                                                          
                                                    @-=+=+*--++*%=+@##=@                                                          
                                                    @--++===+##=#==@+%#@                                                          
                                                    *%-++++-+=++*++@+@@.                                                          
                                                     @:*@+-+=-++=+@@@@#                                                           
                                                     :.@@@@@@@@@@@@=@@%                                                           
                                                        @ #@%@@@%@@@@@@                                                           
                                                       .@@@@@@@@@@@=@@@                                                           
                                                       .@.+@@@@@@@@@@#@                                                           
                                                       .%.+@:##@.@@@:%+                                                           
                                                       :@@@@@-%@.@@@ =.                                                           
                                                       :@+%@@@@@@@@@@@                                                            
                                                       #@ %@@@@@-#=@@@#                                                           
                                                       @@@@@@@@@@@*=%@@                                                           
                                                        @ @@@@@@@*@@@@%                                                           
                                                        @*@@@@@@@%@+%@@                                                           
                                                        @ #@=@@@@@@@-:.%@.  :                                                     
                                                       @@@@@@@@ @@+:@*: .-- @@                                                    
                                                      @@@@@@@@@@.@@@@@-:-@@@=@                                                    
                                                    +@@*+#%@=:-=.::.: .*@@@@@=::-:                                                
                                                     :@@::@@. +@@@@@@+@@-:-:::----::::                                            
                                           .:-------+@@@@@@@@@@%%*@@@@@@#:-:.                                                     
                                                   :::::--:::-:---:::-:::           
`}
                </pre>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>

      <About />
    </div>
  );
}
