// Navbar.jsx
import React,{useState} from 'react';
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import GradientText from './GradientText/GradientText'

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about" },
 
];


const lightToDark = ["#ffe5e5", "#ff4d4d", "#b30000", "#ff1a75", "#800000"];
const darkToLight = ["#800000", "#ff4d4d", "#b30000", "#ff1a75", "#ffe5e5" ];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Navbar = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false); 
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center justify-between px-8 py-8 bg-gradient-to-r from-black to-black text-white shadow-lg h-20 w-full"
    >
      <motion.span
        variants={item}
        className="text-3xl font-extrabold tracking-wide mt-4 ml-3 text-red-600"
      >
        SURAJ
      </motion.span>

      <motion.ul
        variants={container}
        className="flex gap-20 items-center text-xl mt-3 font-medium"
      >
        {menuItems.map(({ label, path }, i) => (
          <motion.li
            key={i}
            variants={item}
            className="relative cursor-pointer after:content-[''] after:block after:h-0.5 after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            <Link to={path} className="hover:text-red-500 transition-colors duration-300">
              {label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
      variants={item}
      className="hover: transition-all mt-3 mr-2 duration-300 text-white py-2 px-5 rounded-full font-semibold shadow-md hover:scale-120"
      onClick={() => navigate('/contact')}
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
  );
};

export default Navbar;
