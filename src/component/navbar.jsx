import React, { useEffect } from 'react';
import  { useState } from 'react';

import { FaBars, FaSun, FaMoon } from 'react-icons/fa'; 

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };




  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDarkMode(theme === "dark");
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    document.documentElement.classList[newTheme === "dark" ? "add" : "remove"]("dark");
    setDarkMode(newTheme === "dark");
  };



  
    return (
        <>
               <header className=' hidden md:flex justify-evenly  w-full fixed top-0 left-0 bg-white z-50 dark:bg-slate-500  h-[100px]  overflow-hidden  items-center drop-shadow-2xl '>
               <h1 className='text-2xl dark:text-white dark:hover:text-gray-300   text-black first-letter:text-orange-400 first-letter:text-4xl font-extrabold first-letter:underline ' >Karem Mahmoud</h1>
            <ul className='flex items-center justify-between '>
                <li className='mr-10 dark:text-white dark:hover:text-gray-300 text-gray-800 text-xl  hover:text-blue-700'><a href="#services">services</a> </li>
                <li className='mr-10 dark:text-white dark:hover:text-gray-300 text-gray-800 text-xl  hover:text-blue-700'><a href="#contact">contact</a> </li>
                <li className='mr-10 dark:text-white dark:hover:text-gray-300 text-gray-800 text-xl  hover:text-blue-700'><a href="#contact">FQS</a> </li>
                <li className='mr-10 dark:text-white dark:hover:text-gray-300 text-gray-800 text-xl  hover:text-blue-700'><a href="#contact">Templets</a> </li>
                <li className='mr-10 dark:text-white dark:hover:text-gray-300 text-gray-800 text-xl  hover:text-blue-700'><a href="#contact">new</a> </li>

                <li className='mr-10 text-xl cursor-pointer ' onClick={toggleDarkMode}>
            {darkMode ? <FaSun size={22} color='gold' /> : <FaMoon size={22} color='' className='text-gray-500' />}
          </li>
            </ul>
        </header>
        <nav className=' w-full fixed top-0 left-0 bg-white dark:bg-slate-500 z-50'>
    <header className='md:hidden flex justify-between px-8 py-3    items-center drop-shadow-2xl relative'>
      <h1 className='text-2xl dark:text-white dark:hover:text-gray-300   text-black first-letter:text-orange-400 first-letter:text-4xl font-extrabold first-letter:underline '>Karem Mahmoud</h1>
      <p className='cursor-pointer ' onClick={toggleMenu}>
        <FaBars className='text-orange-600 first-letter:text-orange-500 dark:text-white dark:hover:text-gray-300' size={22} />
      </p>
      {showMenu &&(
         <ul className="absolute bottom-[-370px] flex flex-col justify-center items-start  left-0 w-full dark:bg-slate-600 bg-orange-600 p-5  z-50" >
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#services">services</a></li>
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#projects">projects</a></li>
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#contact">contact</a></li>
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#contact">contact</a></li>
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#contact">contact</a></li>
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#contact">contact</a></li>

         
         <li className='mr-10 mt-5  text-xl hover:scale-105 cursor-pointer' onClick={toggleDarkMode}>
         {darkMode ? <FaSun size={22} color='gold' /> : <FaMoon size={22}  className='text-gray-500' />}
          </li>
       </ul>
      )}
     
    </header>
    </nav>
        </>
    );
}

export default Navbar;