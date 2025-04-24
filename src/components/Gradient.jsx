"use client"

import { useEffect, useRef } from "react"

const GradientText = ({
  colors,
  animationSpeed = 2,
  showBorder = false,
  className = "",
  children,
}) => {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current
    const gradientSteps = colors
      .map((color, index) => {
        const percentage = (index / (colors.length - 1)) * 100
        return `${color} ${percentage}%`
      })
      .join(", ")

    element.style.background = `linear-gradient(to right, ${gradientSteps})`
    element.style.backgroundSize = "200% auto"
    element.style.color = "transparent"
    element.style.WebkitBackgroundClip = "text"
    element.style.backgroundClip = "text"
    element.style.animation = `gradient ${animationSpeed}s linear infinite alternate`

    const styleSheet = document.styleSheets[0]
    const keyframes = `
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        100% {
          background-position: 100% 50%;
        }
      }
    `

    try {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
    } catch (e) {
   
    }
  }, [colors, animationSpeed])

  return (
    <div
      ref={textRef}
      className={`inline-block font-bold ${showBorder ? "border border-red-500 rounded-full" : ""} ${className}`}
    >
      {children}
    </div>
  )
}

export default GradientText
