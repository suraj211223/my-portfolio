"use client"
import { motion } from "framer-motion"

const AnimatedLogo = () => {
  // SVG path for cursive "SURAJ" text
  const pathData =
    "M10,30 C12,25 12,20 10,20 C8,20 7,25 10,30 C13,35 16,30 20,25 " + // S
    "M25,20 C25,25 25,30 25,30 " + // U
    "M30,20 C35,20 38,25 35,30 C32,35 28,30 35,25 " + // R
    "M45,20 C45,25 45,30 45,30 M40,25 C40,25 50,25 50,25 " + // A
    "M55,20 C60,20 65,25 60,30 C55,35 60,30 65,25" // J

  // Animation variants for the path drawing effect
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 2.5, bounce: 0 },
        opacity: { duration: 0.5 },
      },
    },
  }

  return (
    <motion.svg
      width="120"
      height="50"
      viewBox="0 0 80 50"
      initial="hidden"
      animate="visible"
      className="overflow-visible"
    >
      <motion.path
        d={pathData}
        variants={draw}
        custom={1}
        stroke="#ff4d4d"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </motion.svg>
  )
}

export default AnimatedLogo
