// Homepage.jsx
import React from 'react';
import { Facebook, Instagram, Linkedin } from "lucide-react";
import {motion} from "framer-motion"
import { Transition } from '@react-spring/web';
import  SplitText from "./SplitText/SplitText";
import ShinyText from './ShinyText/ShinyText';


const Home = () => {
  return (
    <div className='firstdiv h-[91vh] overflow-hidden bg-black'>
      <h1 className='text-6xl text-white relative top-20 left-8'>Hi, I'm <SplitText text="Suraj"/></h1>
      <h1 className='font-extrabold text-6xl relative left-8 text-red-600 top-25'>Web Designer</h1>
      <div className='text-white w-6/12 text-lg relative top-30 left-8'>
      Skilled MERN stack web developer with a strong grasp of HTML, CSS, and JavaScript. Passionate about crafting responsive, user-friendly applications with modern UI/UX and full-stack capabilities.

      </div>
      <div className='text-white relative top-35 font-bold text-2xl left-8'>Find  Me  On</div>
      <ul className='flex gap-7 relative top-37 left-8'>
        <li><Facebook className='text-red-50 hover:scale-130 hover:text-red-400 transition-all'/></li>
        <li><Instagram className='text-red-50 hover:scale-130 hover:text-red-400 transition-all'/></li>
        <li><Linkedin className='text-red-50 hover:scale-130 hover:text-red-400 transition-all'/></li>
      </ul>
      <button className='text-white relative top-45 left-8 border-2 border-red p-3 rounded-4xl text-3xl hover:text-red-500 hover:scale-110 transition-all'>Resume</button>
      <button className='text-white relative top-45 left-15 hover:bg-red-700 hover:scale-110 transition-all bg-red-600 p-4 rounded-4xl text-3xl'>Hire me</button>
      <div  initial={{ y: -60 }}  animate={{ y: 0 }}  transition={{ duration: 0.6, delay: 0 }} className='w-50 h-50 opacity-65 bg-red-500 rounded-full relative right-15 top-70'></div>
      <motion.div   initial={{ y: -60, opacity:0 }}  animate={{ y: 0,opacity:1 }}  transition={{ duration: 0.6, delay: 0.6 }} className='w-100 h-100 bg-red-700 z-10 rounded-full overflow-hidden relative ml-auto -left-30 -top-80'>
        <img src="src/assets/Generated_Image-removebg-preview.png" alt="" />
      </motion.div>
      <motion.div initial={{ y: -80 }}  animate={{ y: 0 }}  transition={{ duration: 0.5, delay: 0.3 }} className='w-50 h-50 opacity-50 bg-red-700 rounded-full relative ml-auto -left-18 -top-192'></motion.div>
      <motion.div  initial={{ y: -100 }}  animate={{ y: 0 }}  transition={{ duration: 0.4, delay: 0.2 }} className='w-25 h-25 z-20 opacity-35 bg-red-700 rounded-full relative ml-auto right-64 bottom-265'></motion.div>
    </div>
  );
};

export default Home;
