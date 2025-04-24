import { motion } from "framer-motion"

const HandwritingText = ({ className = "" }) => {
  const letters = [
    // R
    "M10,10 L10,30 M10,10 C10,10 25,10 25,17.5 C25,25 10,25 10,25 C10,25 20,30 25,30",
    // U
    "M35,10 L35,25 C35,30 45,30 45,25 L45,10",
    // D (vertical + curved right side)
    "M55,10 L55,30 M55,10 C70,10 70,30 55,30",
    // R
    "M75,10 L75,30 M75,10 C75,10 90,10 90,17.5 C90,25 75,25 75,25 C75,25 85,30 90,30",
    // A
    "M100,30 L105,10 L110,30 M102,22 L108,22",
  ]

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "spring",
          duration: 1.5,
          bounce: 0,
          delay: i * 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        },
        opacity: { duration: 0.01, delay: i * 0.5 },
      },
    }),
  }

  return (
    <motion.div className={`relative ${className}`}>
      <svg width="120" height="40" viewBox="0 0 120 40" className="overflow-visible">
        {letters.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="#ff4d4d"
            strokeWidth="3"
            fill="transparent"
            initial="hidden"
            animate="visible"
            custom={index}
            variants={pathVariants}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </motion.div>
  )
}

export default HandwritingText
