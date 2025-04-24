import { motion } from "framer-motion"

const HandwritingText = ({ className = "" }) => {
  const letters = [
    "M10,10 C10,5 20,5 20,10 C20,15 10,20 10,25 C10,30 20,30 20,25",      // S
    "M30,10 L30,25 C30,30 40,30 40,25 L40,10",                            // U
    "M50,10 L50,30 M50,10 C50,10 65,10 65,17.5 C65,25 50,25 50,25 C50,25 60,30 65,30", // R
    "M75,30 L80,10 L85,30 M77,22 L83,22",                                 // A
    "M95,10 L95,25 C95,30 85,30 85,25",                                   // J
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
      <svg width="110" height="40" viewBox="0 0 110 40" className="overflow-visible">
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
