import {React,useRef,useEffect} from 'react'
import { motion } from "framer-motion";
import Aurora from './src/Aurora/Aurora';
import SplitText from "./src/SplitText/SplitText";
import { FileSymlink as Html, FileCode, Brackets as BracketsSquare } from 'lucide-react';
import TechCard from "./src/techcard"

const About = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

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

  // New card animation variants
  const cardContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5 // Delay after text animation
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <div className='bg-black'>

      <Aurora className="h-10"/>

      <SplitText
        text="ABOUT ME"
        className="text-6xl text-teal-100 absolute top-30 left-140 font-semibold text-center"
        delay={90}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <div className="text-white absolute top-55 w-8/12 left-62 text-xl text-center">
      Skilled web developer proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) with expertise in HTML, CSS, and JavaScript. Passionate about building responsive, user-friendly web apps. Experienced in front-end and back-end development, RESTful APIs& modern UI/UX. Strong problem-solver.
      </div>

      <motion.div 
        className="w-10/12 gap-25 h-90 bg-transparent absolute top-90 left-30 flex"
        variants={cardContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={cardItem}>
          <TechCard 
            title="HTML, CSS & JS" 
            description="Deep understanding of HTML semantics, CSS architecture (BEM, Flexbox, Grid), and core JavaScript concepts like closures, async/await, and event handling.
Able to build clean, efficient, and accessible front-ends from scratch, with performance and scalability in mind."
            Icon={Html}
            color="bg-orange-500"
          />
        </motion.div>
        
        <motion.div variants={cardItem}>
          <TechCard 
            title="React" 
            description="Skilled in building modular, reusable components with hooks, context API, and optimized state management.
Experienced with routing, lazy loading, and integrating APIs to create seamless, high-performance single-page applications."
            Icon={FileCode}
            color="bg-blue-500"
          />
        </motion.div>
        
        <motion.div variants={cardItem}>
          <TechCard 
            title="Deno" 
            description="Proficient in building secure, modern back-end services with Deno using TypeScript out of the box.
Familiar with Deno’s built-in tooling, permissions model, and module system to develop efficient and maintainable server-side applications."
            Icon={BracketsSquare}
            color="bg-green-500"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
