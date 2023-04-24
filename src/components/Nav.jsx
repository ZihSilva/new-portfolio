import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(toggleMenu);
  }


  return (
    <nav className="bg-beige flex items-center justify-between flex-wrap p-6 border-b border-opacity-90 border-black">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          {/* <img src="../assets/4.png" className="h-8 mr-3" alt="Zimarlen's logo" /> */}
          {/* <span className="text-lg text-greenlight ml-20">ZS</span> */}
          <span class="self-center text-xl mr-16 font-semibold whitespace-nowrap dark:text-white">Zimarlen Silva</span>
        </a>
        <div class="flex md:order-2">
          <button type="button" class="hidden sm:visible text-black bg-greendark hover:bg-greendark focus:ring-4 focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Hire me</button>
          {/* <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button> */}
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-sm lg:text-lg lg:mx-36 lg:flex-grow">
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 mr-12">
              Home
            </a>
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 mr-12">
              About
            </a>
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 mr-12">
              Skills
            </a>
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 mr-12">
              Projects
            </a>
            <a href="#" className="block font-semibold mt-4 lg:inline-block lg:mt-0 text-white-200 mr-12">
              Contact
            </a>
          </div>
          <div>
          </div>
        </div>
      </div>
    </nav>
  )
}

