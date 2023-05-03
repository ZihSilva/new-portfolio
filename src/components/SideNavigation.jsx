import { FaHome, FaUser, FaAtom, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-scroll/modules";



export function SideNavigation() {
    return (
        <div className="bg-beige dark:bg-slate-900  dark:text-white container relative z-30 mx-auto">
            <div className="hidden sm:fixed bottom-0 pl-0 left-6 lg:left-20 md:flex md:flex-col">
                <ul className="flex flex-col pr-30 gap-4 lg:gap-8">
                    <li className=" relative text-lg bg-transparent text-opacity-75 dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer group">
                        <div className="hidden lg:block text-white absolute bottom-10 left-2 group-hover:opacity-100 duration-300 opacity-0 py-2 px-0 rounded-full">
                            <p className="text-base text-white">Home</p>
                        </div>
                        <Link to="home" smooth={true} duration={500}>
                            <FaHome className="w-7 h-7 text-white transition duration-200 ease-in-out hover:rotate-360 hover:scale-110 shadow-md shadow-greenlight/40" />
                        </Link>
                    </li>
                    <li className="relative text-lg  text-opacity-75  dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer group">
                        <div className="hidden lg:block absolute bottom-14 left-0 group-hover:opacity-100 duration-300 opacity-0 py-2 px-1  rounded-full">
                            <p className="text-base text-white">About</p>
                        </div>
                        <Link to="about" smooth={true} duration={500}>
                            <FaUser className="w-7 h-7 mb-4 text-white shadow-md shadow-greenlight/40" />
                        </Link>
                    </li>
                    <li className="relative text-lg  text-white text-opacity-75  dark:text-white p-3  rounded-full hover:scale-125 duration-300 cursor-pointer group">
                        <div className="hidden lg:block absolute text-white bottom-12 left-0 group-hover:opacity-100 duration-300 opacity-0 py-2 px-0  rounded-full md:flex-col">
                            <p className="text-base">Projects</p>
                        </div>
                        <Link to="project" smooth={true} duration={500}>
                            <FaAtom className="w-7 h-7 text-white shadow-md shadow-greendark/40" />
                        </Link>
                    </li>
                    <li className="relative text-lg  text-white text-opacity-75  dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer group">
                        <div className="hidden lg:block absolute bottom-10 left-0 group-hover:opacity-100 duration-300 opacity-0 py-2 px-0 rounded-full">
                            <p className="text-white">Contact</p>
                        </div>
                        <Link to="contact" smooth={true} duration={500}>
                            <FaRegEnvelope className="w-7 h-7 text-white shadow-md shadow-greenlight/40" />
                        </Link>
                    </li>
                </ul>
                <div className="w-0.5 ml-6 dark:bg-white bg-dark h-24 opacity-20 mt-2"></div>
            </div>
        </div>
    );
}
