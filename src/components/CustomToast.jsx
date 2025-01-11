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
      className={`fixed top-5 px-5 py-2.5 bg-[#97514b] text-white text-sm md:text-xl capitalize shadow-2xl rounded-md transition-opacity duration-300 z-50 ${show ? 'opacity-100 right-5' : '-right-[100vw] opacity-0'}`}
      style={{ transition: 'opacity 0.5s ease' }}
    >
      {message}
    </div>
  );
};


export default CustomToast