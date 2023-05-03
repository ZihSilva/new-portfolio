// import React, { useState } from 'react';
// import { Link } from 'react-scroll/modules';




// export function Sidebar() {

//     const [navbarOpen, setNavbarOpen] = useState();
//     const [visibleSection, setVisibleSection] = useState();

//     const handleResize = () => {
//         if (window.innerWidth < 1024) {
//         } else {
//           setNavbarOpen(false);
//         }
//       };

//     return (

//         <div
//         className={`relative w-full dark:bg-dark/20 bg-light bg-opacity-10 overflow-auto min-h-screen transition-all duration-150 ease-in-out ${
//           navbarOpen ? "overflow-hidden" : "overflow-auto"
//         }`}
//       >

//         <div className="bg-white dark:bg-darker transition-all duration-150 ease-in-out ">
//                 <div
//                     className={`fixed w-full z-50 h-screen pt-24 bg-white dark:bg-darker bg-opacity-100 transform delay-100 transition-all duration-150 ${navbarOpen
//                         ? "fa-solid fa-x"
//                         : "fas fa-bars"
//                         }`}
//                 >
//                     <div className="container relative mx-auto">
//                         <nav className="block ml-auto">
//                             <ul className="z-50 flex flex-col items-start">

//                                 <li className="z-50 block py-2 list-none lg:inline-block">
//                                     <Link to="contact" smooth={true} duration={500}
//                                         className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${visibleSection === "home"
//                                             ? "selected delay-200"
//                                             : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
//                                             }`}
//                                     >
//                                         Home
//                                     </Link>
//                                 </li>
//                                 <li className="z-50 block py-2 list-none lg:inline-block">
//                                     <Link to="contact" smooth={true} duration={500}
//                                         className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${visibleSection === "projects"
//                                             ? "selected delay-200"
//                                             : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
//                                             }`}
//                                     >
//                                       About 
//                                     </Link>
//                                 </li>
//                                 <li className="z-50 block py-2 list-none lg:inline-block">
//                                     <Link to="skills" smooth={true} duration={500}
//                                         className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${visibleSection === "Skills"
//                                             ? "selected delay-200"
//                                             : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
//                                             }`}
//                                     >
//                                        Skills
//                                     </Link>
//                                 </li>
//                                 <li className="z-50 block py-2 list-none lg:inline-block">
//                                     <Link to="contact" smooth={true} duration={500}
//                                         className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${visibleSection === "projects"
//                                             ? "selected delay-200"
//                                             : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
//                                             }`}
//                                     >
//                                         Projects
//                                     </Link>
//                                 </li>
//                                 <li className="z-50 block py-2 list-none lg:inline-block">
//                                     <Link to="contact" smooth={true} duration={500}
//                                         className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${visibleSection === "contact"
//                                             ? "selected delay-200"
//                                             : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
//                                             }`}
//                                     >
//                                         Contact
//                                     </Link>
//                                 </li>
//                                 <li className="z-40 block py-2 mt-6 list-none lg:inline-block">
//                                     <a
//                                         href={`mailto:zimarlensilva@gmail.com`}
//                                         className="text-lg btn-brand btn-lg group"
//                                     >
//                                         Hire me 
//                                     </a>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//             </div>


//     )
// }






