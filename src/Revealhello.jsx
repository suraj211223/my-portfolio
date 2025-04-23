import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

// RevealHello Component
const RevealHello = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    // GSAP animation for both lines with stagger
    gsap.from([line1Ref.current, line2Ref.current], {
      opacity: 0,
      y: 64,
      duration: 0.8,
      delay: 0.8,
      ease: 'power3.out',
      stagger: 0.15, // Adds staggered effect to both elements
    });
  }, []);

  return (
    <div className="text-white absolute top-[30px] left-[157px] text-center text-7xl">
      <div ref={line1Ref} className="line1">
        Hello
      </div>
      <div ref={line2Ref} className="line2">
        World
      </div>
    </div>
  );
};

export default RevealHello;
