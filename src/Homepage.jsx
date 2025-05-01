// Homepage.jsx
import React,{useState} from 'react';
import { Facebook, Instagram, Linkedin } from "lucide-react";
import {motion} from "framer-motion"
import { Transition } from '@react-spring/web';
import  SplitText from "./SplitText/SplitText";
import ShinyText from './ShinyText/ShinyText';
import GradientText from './components/Gradient';
import Aurora from './Aurora/Aurora';


const lightToDark = ["#fff0f0", "#ff9999", "#ff4d4d", "#ff6666", "#cc3333"]
const darkToLight = ["#cc3333", "#ff6666", "#ff4d4d", "#ff9999", "#fff0f0"]

const Home = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <div className='firstdiv h-[91vh] overflow-hidden bg-black'>
      <h1 className='text-6xl text-white relative top-30 left-8'>Hi, I'm <SplitText text="Suraj"/></h1>
      <div className="relative top-35 left-8 w-fit h-24 overflow-hidden">
      {/* Text */}
      <h1 className="font-extrabold text-6xl text-red-600 relative z-10">
        Web Designer
      </h1>

      {/* Mask rectangle */}
      <motion.div
        className="absolute top-0 left-0 h-[78px]  bg-red-600 z-20"
        initial={{ x: "0%", width: "100%" }}
        animate={{ x: ["0%", "100%"], width: ["100%", "100%"] }}
        transition={{
          delay: 0.2,
          duration: 0.9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1.5,
        }}
      />
    </div>
      <div className='text-white w-6/12 text-lg relative top-32 left-8'>
      Skilled MERN stack web developer with a strong grasp of HTML, CSS, and JavaScript. Passionate about crafting responsive, user-friendly applications with modern UI/UX and full-stack capabilities.

      </div>
      <div className='text-white relative top-35 font-bold text-2xl left-8'>Find  Me  On</div>
      <ul className='flex gap-7 relative top-37 left-8'>
      <li>
  <a href="https://www.facebook.com/profile.php?id=61552954138394" target="_blank" rel="noopener noreferrer">
    <Facebook className="text-red-50 hover:scale-130 hover:text-red-400 transition-all" />
  </a>
</li>
<li>
  <a href="https://www.instagram.com/ultron__gaming1/?hl=en" target="_blank" rel="noopener noreferrer">
    <Instagram className="text-red-50 hover:scale-130 hover:text-red-400 transition-all" />
  </a>
</li>
<li>
  <a href="https://www.linkedin.com/in/rudra-bishoyi-94a9462a3/" target="_blank" rel="noopener noreferrer">
    <Linkedin className="text-red-50 hover:scale-130 hover:text-red-400 transition-all" />
  </a>
</li>
      </ul>
      <GradientText
      animationSpeed={3}
      showBorder={true}
      colors={hovered ? darkToLight : lightToDark}
      className="p-4 relative top-45 left-8 text-3xl hover:scale-110 transition-all"
      >Resume</GradientText>
<motion.button className="relative text-white text-3xl p-4 rounded-[2rem] bg-red-600 hover:bg-red-700 hover:scale-110 transition-all z-10 top-45 left-16 overflow-hidden">
  <span className="relative z-20 text-black font-bold">Hire me</span>
  <span className="absolute inset-[-150%] z-0 bg-[conic-gradient(#ff4d4d,#ff9999,#ff4d4d,#ff1a1a,#ff4d4d)] blur-md animate-[spin_4s_linear_infinite]"></span>
  <span className="absolute inset-1 bg-red-black rounded-[1.8rem] z-10"></span>
</motion.button>
      <div  initial={{ y: -60 }}  animate={{ y: 0 }}  transition={{ duration: 0.6, delay: 0 }} className='w-50 h-50 opacity-65 bg-red-500 rounded-full relative right-15 top-70'></div>
      <motion.div   initial={{ y: -60, opacity:0 }}  animate={{ y: 0,opacity:1 }}  transition={{ duration: 0.6, delay: 0.6 }} className='w-100 h-100 bg-red-700 z-10 rounded-full overflow-hidden relative ml-auto -left-30 -top-80'>
      <img src={`${import.meta.env.BASE_URL}assets/Generated_Image-removebg-preview.png`} alt="" />
      </motion.div>
      <motion.div initial={{ y: -80 }}  animate={{ y: 0 }}  transition={{ duration: 0.5, delay: 0.3 }} className='w-50 h-50 opacity-50 bg-red-700 rounded-full relative ml-auto -left-18 -top-192'></motion.div>
      <motion.div  initial={{ y: -100 }}  animate={{ y: 0 }}  transition={{ duration: 0.4, delay: 0.2 }} className='w-25 h-25 z-20 opacity-35 bg-red-700 rounded-full relative ml-auto right-64 bottom-265'></motion.div>
    </div>
  );
};

export default Home;
