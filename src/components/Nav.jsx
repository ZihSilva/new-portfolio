import React, {useState, useEffect} from 'react'

export function Nav() {

    const [navbarIsOpen, setNavbarIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleResize = ( ) => {
        if (window.innerWidth <1024) {
        } else {
          setNavbarIsOpen(false);
        }
        }

        useEffect(() => {
            if (typeof window !== "undefined") {
              window.addEventListener("scroll", () =>
                setScrolling(window.pageYOffset > 110)
              );
            }
          }, []);
          
          useEffect(() => {
            window.addEventListener("resize", handleResize);
          });

  return (
    <header className={`fixed w-full z-50 bg-white ${scrolling && "shadow"}`}>
    <div className="container flex justify-between items-center mx-auto py-4 md:py-6">
      <div className="flex items-center">
        <a href="#" className="font-bold text-2xl text-gray-800">
          My Portfolio
        </a>
        <button
          onClick={() => setNavbarIsOpen(!navbarIsOpen)}
          className="md:hidden ml-4 focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current text-gray-800"
            viewBox="0 0 24 24"
          >
            {navbarIsOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6H5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-1-1zm0 5H5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1v-1a1 1 0 00-1-1zM4 4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1H4z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <nav className={`md:flex ${navbarIsOpen ? "block" : "hidden"}`}>
        <ul className="md:flex items-center">
          <li>
            <a href="#projects" className="block mt-4 md:inline-block md:mt-0 mr-6">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="block mt-4 md:inline-block md:mt-0 mr-6">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="block mt-4 md:inline-block md:mt-0">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  
  )
}
