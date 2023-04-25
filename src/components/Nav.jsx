import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(toggleMenu);
  }


  return (
    <nav className="bg-beige flex items-center justify-between flex-wrap p-4 border-b border-opacity-90 border-black">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" class="flex items-center">
          {/* <img src="../assets/4.png" className="h-8 mr-3" alt="Zimarlen's logo" /> */}
          {/* <span className="text-lg text-greenlight ml-20">ZS</span> */}
          <span class="flex justify-start text-xl text-white mr-24 lg:mr-0 sm:mr-96 font-semibold whitespace-nowrap dark:text-white first-letter:text-lightgreen">Zimarlen Silva</span>
        </a>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-white-500 hover:text-white-400"
          >
            <svg
              className={`fill-current h-3 w-3 text-white ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 text-white ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-72 ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-sm lg:text-lg text-white lg:mx-16 lg:flex-grow ">
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 text-white mr-12">
              Home
            </a>
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 mr-12">
              About
            </a>
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 mr-12">
              Skills
            </a>
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 mr-12">
              Projects
            </a>
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 mr-12">
              Contact
            </a>

          <button type="button" class=" text-white bg-transparent border-2 border-greenlight shadow-lg shadow-greendark/50 hover:bg-greendark focus:ring-4 focus:outline-none  font-medium  text-sm px-4 py-2 text-center mr-3 lg:mr-0 md:mr-0">Hire me</button>
      
          </div>
          <div>
          </div>
        </div>
      </div>
    </nav>
  )
}

