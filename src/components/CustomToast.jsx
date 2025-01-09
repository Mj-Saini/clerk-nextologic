/* eslint-disable react/prop-types */
import { useEffect } from "react";


const CustomToast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose(); 
      }, 2000);

      return () => clearTimeout(timer); 
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed top-5 p-5 bg-gray-800 text-white text-xl capitalize shadow-2xl rounded-md transition-opacity duration-300 z-50 ${show ? 'opacity-100 right-5' : '-right-1/4 opacity-0'}`}
      style={{ transition: 'opacity 0.5s ease' }}
    >
      {message}
    </div>
  );
};


export default CustomToast