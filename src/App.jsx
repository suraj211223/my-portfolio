import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './navbar'; // Adjust the path if needed
import About from '../about';
import Contact from './components/contact';
import Projects from './Projects';
import Home from './Homepage';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
