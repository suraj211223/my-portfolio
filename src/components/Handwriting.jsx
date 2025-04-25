import { motion } from "framer-motion"

const HandwritingText = ({ className = "" }) => {
  const letters = [
    "M10,30 C10,20 25,20 25,10 C25,0 10,0 10,10",                    // S
    "M35,10 L35,25 C35,30 45,30 45,25 L45,10",                       // U
    "M55,30 L55,10 M55,10 C65,10 65,20 55,20 M55,20 L65,30",                     // R
    "M70,30 L75,10 L80,30 M72,20 L78,20",                            // A
    "M90,10 L90,30 C90,30 85,30 85,25",                              // J
  ];

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
        opacity: {
          duration: 0.01,
          delay: i * 0.5,
        },
      },
    }),
  };

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
  );
};

export default HandwritingText;
