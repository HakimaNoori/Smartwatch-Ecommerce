import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero/>  
    </div>
  );
};

export default App;