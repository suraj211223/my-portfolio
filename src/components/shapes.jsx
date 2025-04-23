import React, { useEffect, useRef } from 'react';

const BackgroundShapes = () => {
  const shapesContainerRef = useRef(null);
  
  useEffect(() => {
    const shapes = shapesContainerRef.current?.querySelectorAll('.shape');
    if (!shapes) return;
    
    const animate = () => {
      shapes.forEach((shape, index) => {
        const element = shape;
        
        const duration = 20 + (index * 5);
        const delay = index * -3;
        
        element.style.animation = `
          float ${duration}s ease-in-out ${delay}s infinite alternate,
          pulse ${duration / 2}s ease-in-out ${delay}s infinite alternate
        `;
      });
    };
    
    animate();
  }, []);
  
  return (
    <div ref={shapesContainerRef} className="absolute inset-0 overflow-hidden z-0">
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(5%, 5%) rotate(5deg); }
            100% { transform: translate(-5%, -5%) rotate(-5deg); }
          }
          
          @keyframes pulse {
            0% { opacity: 0.3; }
            50% { opacity: 0.5; }
            100% { opacity: 0.3; }
          }
        `}
      </style>
      
      <div 
        className="shape absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full 
                 bg-gradient-to-br from-red-700/30 to-red-900/20 blur-3xl"
      />
      
      <div 
        className="shape absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] rounded-full 
                 bg-gradient-to-tr from-red-600/20 to-red-800/10 blur-3xl"
      />
      
      <div 
        className="shape absolute top-[30%] right-[-8%] w-[25%] h-[25%] rounded-full 
                 bg-gradient-to-bl from-red-500/15 to-red-700/10 blur-3xl"
      />
      
      <div 
        className="shape absolute top-[40%] left-[-15%] w-[40%] h-[30%] rounded-full 
                 bg-gradient-to-r from-red-600/20 to-red-900/5 blur-3xl"
      />
      
      <div 
        className="shape absolute top-[10%] left-[40%] w-[15%] h-[15%] rounded-full 
                 bg-gradient-to-br from-red-400/20 to-red-600/10 blur-2xl"
      />
      
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"
      />
    </div>
  );
};

export default BackgroundShapes;