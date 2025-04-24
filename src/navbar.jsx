import { useState } from "react"
import { motion } from "framer-motion"
import { Link, useNavigate, useLocation } from "react-router-dom"
import GradientText from "./components/Gradient"
import HandwritingText from "./components/Handwriting"

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about" },
]

const lightToDark = ["#fff0f0", "#ff9999", "#ff4d4d", "#ff6666", "#cc3333"]
const darkToLight = ["#cc3333", "#ff6666", "#ff4d4d", "#ff9999", "#fff0f0"]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const Navbar = () => {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center justify-between px-8 py-8 bg-gradient-to-r from-black to-black text-white shadow-lg h-20 w-full"
    >
      {/* Handwriting-style animated brand name */}
      <motion.div variants={item} className="mt-4 ml-3">
        <HandwritingText className="scale-110" />
      </motion.div>

      {/* Menu Items */}
      <motion.ul
        variants={container}
        className="flex gap-20 items-center text-xl mt-3 font-medium"
      >
        {menuItems.map(({ label, path }, i) => {
          const isActive = location.pathname === path
          return (
            <motion.li
              key={i}
              variants={item}
              className={`relative cursor-pointer after:content-[''] after:block after:h-0.5 after:bg-red-500 
                ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'} 
                hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`}
            >
              <Link
                to={path}
                className={`transition-colors duration-300 ${
                  isActive ? "text-red-50" : ""
                }`}
              >
                {label}
              </Link>
            </motion.li>
          )
        })}
      </motion.ul>

      {/* Contact Button with GradientText */}
      <motion.button
        variants={item}
        className="hover: transition-all mt-3 mr-2 duration-300 text-white py-2 px-5 rounded-full font-semibold shadow-md hover:scale-120"
        onClick={() => navigate("/contact")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <GradientText
          colors={hovered ? darkToLight : lightToDark}
          animationSpeed={3}
          showBorder={true}
          className="py-2 px-3"
        >
          Contact Me
        </GradientText>
      </motion.button>
    </motion.div>
  )
}

export default Navbar
