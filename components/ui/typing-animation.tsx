"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
  showCursor?: boolean
  onComplete?: () => void
}

export function TypingAnimation({ text, speed = 50, className, showCursor = true, onComplete }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, text, speed, isComplete, onComplete])

  return (
    <span className={cn("font-mono antialiased", className)}>
      {displayText}
      {showCursor && (
        <span className="animate-cursor-blink text-green-400 dark:text-green-400 light:text-green-600 font-bold">
          |
        </span>
      )}
    </span>
  )
}
