import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touchedFields[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let fieldErrors = { ...errors };
    
    switch (name) {
      case 'name':
        fieldErrors.name = value.trim() === '' ? 'Name is required' : undefined;
        break;
      case 'email':
        fieldErrors.email = !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) 
          ? 'Please enter a valid email' 
          : undefined;
        break;
      case 'subject':
        fieldErrors.subject = value.trim() === '' ? 'Subject is required' : undefined;
        break;
      case 'message':
        fieldErrors.message = value.trim().length < 10 
          ? 'Message must be at least 10 characters' 
          : undefined;
        break;
      default:
        break;
    }
    
    setErrors(fieldErrors);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
    
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setTouchedFields({});
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 sm:p-8 
                 shadow-xl transition-all duration-300 hover:shadow-red-900/20
                 border border-gray-800 relative overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-red-600 bg-opacity-20 blur-2xl"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-red-600 bg-opacity-20 blur-2xl"></div>
      
      <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Send us a message</h2>
      
      <div className="space-y-5 relative z-10">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full bg-gray-800 bg-opacity-70 text-white rounded-lg px-4 py-3 outline-none
                       border ${errors.name ? 'border-red-500' : 'border-gray-700'}
                       focus:border-red-500 transition-colors`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full bg-gray-800 bg-opacity-70 text-white rounded-lg px-4 py-3 outline-none
                       border ${errors.email ? 'border-red-500' : 'border-gray-700'}
                       focus:border-red-500 transition-colors`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-gray-300 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full bg-gray-800 bg-opacity-70 text-white rounded-lg px-4 py-3 outline-none
                       border ${errors.subject ? 'border-red-500' : 'border-gray-700'}
                       focus:border-red-500 transition-colors`}
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full bg-gray-800 bg-opacity-70 text-white rounded-lg px-4 py-3 outline-none
                       border ${errors.message ? 'border-red-500' : 'border-gray-700'}
                       focus:border-red-500 transition-colors`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg
                     transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-0
                     shadow-lg hover:shadow-red-700/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;