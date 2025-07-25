import React, { useState } from 'react';
import ContactForm from 'src/components/ContactForm';
import BackgroundShapes from '../components/shapes';
import SuccessPopup from '../components/popup';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setShowSuccess(true);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <BackgroundShapes />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link
          to="/" 
          className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Get in Touch</h1>
          <p className="text-red-500 text-xl mb-12">We'd love to hear from you</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ContactForm onSubmit={handleSubmit} />
            </div>
            
            <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 h-fit">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-red-500 font-medium mb-1">Address</h4>
                  <p className="text-gray-300">s.n.t road</p>
                </div>
                
                <div>
                  <h4 className="text-red-500 font-medium mb-1">Email</h4>
                  <p className="text-gray-300">sd862768@gmail.com</p>
                </div>
                
                <div>
                  <h4 className="text-red-500 font-medium mb-1">Phone</h4>
                  <p className="text-gray-300">+91 9348375633</p>
                </div>
                
                <div>
                  <h4 className="text-red-500 font-medium mb-1">Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 9am - 5pm</p>
                  <p className="text-gray-300">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}
    </div>
  );
};

export default Contact;
