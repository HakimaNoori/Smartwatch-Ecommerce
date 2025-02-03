import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import AOS from "aos";
import "aos/dist/aos.css"

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []); 
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-200">
      <Navbar />
      <Hero/>  
    </div>
  );
};

export default App;