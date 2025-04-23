import React, { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

const SuccessPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div 
        className={`bg-gray-900 text-white p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-800
                   transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                   relative overflow-hidden`}
      >
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-red-600/20 blur-xl"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-red-600/10 blur-xl"></div>
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
            <CheckCircle size={36} className="text-red-500" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-300 mb-6">
            Thank you for contacting us. We'll get back to you as soon as possible.
          </p>
          
          <button
            onClick={handleClose}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg
                     transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-0
                     shadow-lg hover:shadow-red-700/30"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;