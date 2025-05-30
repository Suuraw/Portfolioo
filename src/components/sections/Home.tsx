import { Github, Linkedin,Pickaxe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Projects from "@/components/sections/Projects"

export default function Home() {

  const socials = [
    {
      title: "GitHub",
      href: "https://github.com/Suuraw",
      icon: <Github className="w-4 h-4" />
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/sujay-kumar-4b85b5252/",
      icon: <Linkedin className="w-4 h-4"/>
    },
    {
      title: "LeetCode",
      href: "https://leetcode.com/u/sujayraw13/",
      icon: <Pickaxe className="w-4 h-4"/>
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-purple-blue text-2xl md:text-3xl">Hello, World! 👋</h1>
      <p className="text-lg text-gray-white">
        Web and Devops enthusiast
      </p>
      <div className="flex gap-4 flex-wrap">
        {socials.map((social) => (
          <Link href={social.href} key={social.title}>
            <Button variant="outline" className="gap-2 text-purple border-muted hover:border-gray-white">
              {social.icon}
              {social.title}
            </Button>
          </Link>
        ))}
      </div>
      <Projects />
    </div>
  )
}
