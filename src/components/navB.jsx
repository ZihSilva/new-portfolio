//  const [ isOpen, setIsOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);

//   const handleResize = () => {
//     if (window.innerWidth < 768) {
//     } else {
//       setIsOpen(false);
//     }
//   }

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.addEventListener("scroll", () =>
//         setScrolling(window.pageYOffset > 110)
//       );
//     }
//   }, []);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//   });

//   return (
//     <header className=''fixed w-full max-auto z-50 bg-white>
//       <div className="flex justify-evenly items-center py-4 md:py-6">
//         <div className="flex items-center">
//           <a href="/" className="font-bold text-2xl text-gray-800">
//             My Portfolio
//           </a>
//           {/* <button
//             onClick={() => setNavbarIsOpen(!navbarIsOpen)}
//             className="sm:hidden ml-32 focus:outline-none"
//           >
//             <svg
//               className="h-6 w-6 fill-current text-gray-800"
//               viewBox="0 0 24 24"
//             >
//               {navbarIsOpen ? (
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M19 6H5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-1-1zm0 5H5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1v-1a1 1 0 00-1-1zM4 4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1H4z"
//                 />
//               ) : (
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
//                 />
//               )}
//             </svg>
//           </button> */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex sm:hidden items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
//           >
//             <svg
//               className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//             </svg>
//             <svg
//               className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
//             </svg>
//           </button>
//         </div>
//         <nav className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}>
//           <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//           <li className="z-50 hidden mx-10 list-none lg:inline-block">
//               <a href="#about" className="block mt-4 md:inline-block md:mt-0 ml-10">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#projects" className="block mt-4 md:inline-block md:mt-0 ml-10">
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="#experience" className="block mt-4 md:inline-block md:mt-0 ml-10">
//                 Experience
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="block mt-4 md:inline-block md:mt-0 ml-10">
//                 Contact
//               </a>
//             </li>
//             <button className="bg-black hover:bg-transparent text-white font-bold py-2 ml-10 px-4 rounded">
//                 <li className="z-50 hidden list-none lg:inline-block">
//                   <a
//                     href={`mailto:zimarlensilva@gmail.com`}
//                     className="ml-1 btn-md group"
//                   >
//                     Hire me
//                   </a>
//                 </li>
//                 </button>
//           </ul>
//           </nav>
//         </div>
//     </header>




// export function Nav() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed w-full max-auto z-50 bg-white">
//       <div className="flex justify-evenly items-center py-4 md:py-6">
//         <div className="flex items-center">
//           <a href="/" className="font-bold text-2xl text-gray-800">
//             My Portfolio
//           </a>
//         </div>
//         <div className="block lg:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
//           >
//             <svg
//               className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//             </svg>
//             <svg
//               className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`w-full block flex-grow lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}
//         >
//           <ul className="md:flex items-center ml-20">
//             <li>
//               <a href="#about" className="block mt-4 md:inline-block md:mt-0 ml-96">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#projects" className="block mt-4 md:inline-block md:mt-0 ml-10">
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="#experience" className="block mt-4 md:inline-block md:mt-0 ml-10">
//                 Experience
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="block mt-4 md:inline-block md:mt-0 ml-10">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <button className="inline-flex items-center bg-black border-0 py-2 px-4 text-white">
//             Click Me
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

