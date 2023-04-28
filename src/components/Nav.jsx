import React, { useState } from 'react';
import { NavLinks } from './NavLinks';

export function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(toggleMenu);
  }

  return (
    <nav className="bg-beige flex items-center justify-between flex-wrap p-4 border-b border-opacity-90 border-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center pr-4">
          <span className="flex justify-start text-xl text-white mr-24 lg:mr-0  font-semibold whitespace-nowrap dark:text-white first-letter:text-lightgreen">Zimarlen Silva</span>
        </a>
        {/* hamburger menu */}
        <div className="block lg:hidden pl-8">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 rounded text-white-500 hover:text-greenlight"
          >
            <svg
              className={`fill-current h-3 w-3 text-white ${isOpen ? 'hidden' : 'block'}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 text-white ${isOpen ? 'block' : 'hidden'}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        
        <NavLinks/>
      </div>
    </nav>
  )
}