import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-scroll'
// import { FaHome } from 'react-icons/fa'





export function Navbar() {

  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  
  const handleResize = ( ) => {
    if (window.innerWidth <1024) {
    } else {
      setNavbarIsOpen(false);
    }
    }
  
    const headerRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const myWorkRef = useRef(null);
    const contactRef = useRef(null);



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

// useEffect(() => {
//   setMounted(true);
// }, []);


 
return (
    <header
          className={`header top-0 mx-auto flex items-center py-6 z-50 fixed w-full transition-all duration-150 h-20 ${
             !navbarIsOpen
              ? "dark:bg-dark bg-white"
              : "dark:bg-darker bg-white"
          }`}
          ref={headerRef}
        >
          {/* Logo and Nav container */}
          <div className="container relative flex items-center mx-auto">
            {/* Logo */}
            <div className="z-50 w-9 sm:w-12 h-9 sm:h-12 flex items-center">
            </div>
            {/* Text */}
            <div className="flex items-center ml-4">
              <p className="text-lg font-semibold font-display tracking-tight dark:text-white text-darker mb-0 transition-all duration-150 ease-in-out">
                Zimarlen Silva
              </p>
            </div>
            {/* Nav */}
            <nav className="block ml-auto h-full">
              <ul className="z-50 flex items-center">
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <Link to="contact" smooth={true} duration={500}
                    href="#"
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "home"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 dark:text-white text-dark"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <Link to="contact" smooth={true} duration={500}
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "about"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent  dark:text-white text-dark"
                    }`}
                  
                  >
                    About
                  </Link>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <Link to="contact" smooth={true} duration={500}
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "skills"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent dark:text-white text-dark"
                    }`}
                  >
                    Skills
                  </Link>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <Link to="contact" smooth={true} duration={500}
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "my-work"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent dark:text-white text-dark"
                    }`}
                  >
                    Projects
                  </Link>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <Link to="contact" smooth={true} duration={500}
                    target="_blank"
                    rel="noreferrer"
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "blog"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent dark:text-white text-dark"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li className="z-50 hidden mx-5 list-none lg:inline-block">
                  <Link to="contact" smooth={true} duration={500}
                    className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                      visibleSection === "contact"
                        ? "selected delay-150"
                        : "opacity-50 hover:opacity-100 border-b-2 border-transparent dark:text-white text-dark"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="z-50 hidden ml-5 list-none lg:inline-block">
                  <a
                    href={`mailto:zimarlensilva@gmail.com`}
                    className="btn-brand btn-md group"
                  >
                    Hire me
                  </a>
                </li>
                <li className="z-50 inline-block list-none lg:hidden group">
                  <button
                    className={`relative w-10 h-10 ${
                      navbarIsOpen
                        ? "dark:text-white text-dark"
                        : "text-mid/50 group-hover:text-mid dark:opacity-50 dark:group-hover:opacity-100 dark:text-white dark:group-hover:text-white"
                    } focus:outline-none`}
                    onClick={() => setNavbarIsOpen(!navbarIsOpen)}
                  >
                    <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarIsOpen ? "rotate-45" : "-translate-y-1.5"
                        }`}
                      ></span>
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarIsOpen ? "opacity-0" : "opacity-100"
                        }`}
                      ></span>
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarIsOpen ? "-rotate-45" : "translate-y-1.5"
                        }`}
                      ></span>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>

)
}






          
      


