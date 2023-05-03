import React, { useState } from 'react';
import { Link } from 'react-scroll';

export function NavB() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="bg-beige header top-3 mx-auto flex items-center z-50 fixed w-full transition-all duration-150 h-20 ease-in-out">
            <nav className="relative flex justify-between ml-20 max-auto">
                {/* Logo */}
                <div className="z-50 sm:w-8 sm:h-8 w-9 h-9 ml-10 pt-4 flex items-center text-white  opacity-50">
                    <svg
                        id="b613d120-e911-4f71-b7bc-d9b9e1bbdc6f"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 93.13 75.2"
                    >
                        <rect
                            className="fill-current text-brand"
                            x="-3.43"
                            y="39.29"
                            width="32.19"
                            height="8.78"
                            rx="4.39"
                            transform="translate(-27.18 21.75) rotate(-45)"
                        />
                        <rect
                            className="fill-current text-brand"
                            x="-3.43"
                            y="22.74"
                            width="32.19"
                            height="8.78"
                            rx="4.39"
                            transform="translate(22.89 -1.01) rotate(45)"
                        />
                        <rect
                            className="fill-current text-brand"
                            x="64.37"
                            y="22.74"
                            width="32.19"
                            height="8.78"
                            rx="4.39"
                            transform="translate(156.55 -10.59) rotate(135)"
                        />
                        <rect
                            className="fill-current text-brand"
                            x="64.37"
                            y="39.29"
                            width="32.19"
                            height="8.78"
                            rx="4.39"
                            transform="translate(106.48 131.47) rotate(-135)"
                        />
                        <rect
                            className="fill-current text-brand"
                            x="41.93"
                            y="-1.17"
                            width="8.78"
                            height="77.54"
                            rx="4.39"
                            transform="translate(11.31 -10.71) rotate(15)"
                        />
                    </svg>
                </div>
                <div className="flex items-center ml-4">
                    <p className="text-xl font-semibold font-display tracking-tight dark:text-white mb-0 transition-all duration-150 ease-in-out text-greenlight shadow-neon animate-pulse">
                        Zimarlen Silva
                    </p>
                </div>
                {/* links */}
                <div className="ml-auto h-full">
                    <div className="z-50 flex justify-end pl-96">
                        <Link
                            to="/"
                            className="z-50 hidden mx-5 list-none lg:inline-block text-white hover:text-greenlight transition duration-300 ease-out px-1 py-2 rounded-md text-md font-medium">
                            Home
                        </Link>
                        <Link
                            to="about"
                            className=" z-50 hidden mx-5 list-none lg:inline-block text-white hover:text-greenlight transition duration-300 ease-out px-1 py-2 rounded-md text-md font-medium">
                            About
                        </Link>
                        <Link
                            to="skills"
                            className=" z-50 hidden mx-5 list-none lg:inline-block text-white hover:text-greenlight transition duration-300 ease-out px-1 py-2 rounded-md text-md font-medium">
                            Skills
                        </Link>
                        <Link
                            to="projects"
                            className=" z-50 hidden mx-5 list-none lg:inline-block text-white hover:text-greenlight transition duration-300 ease-out px-1 py-2 rounded-md text-md font-medium">
                            Projects
                        </Link>
                        <Link
                            to="Contact"
                            className=" z-50 hidden mx-5 list-none lg:inline-block text-white  hover:text-greenlight transition duration-300 ease-out px-1 py-2  text-md font-medium">
                            Contact
                        </Link>
                        {/* Button */}

                    </div>
                </div>
                <button className="z-50 px-2 py-2 hidden mx-5 list-none lg:inline-block text-white bg-transparent border-2 border-greenlight shadow-md shadow-greenlight/30 hover:bg-greenlight focus:outline-none font-bold  rounded">
                    <a
                        href={`mailto:zimarlensilva@gmail.com`}
                        className="btn-sm group text-sm"
                    >
                        Hire me
                    </a>
                </button>
                {/* mobile menu */}
                <div className="-mr2 flex lg:hidden">
                    {isOpen ? (
                        <button
                            className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className="absolute top-2 right-4  h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    ) : (
                        <svg
                            onClick={() => setIsOpen(!isOpen)}
                            className="block h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                    <div className={`top-0 right-0 w-[100vw] py-10 bg-beige opacity-90 sm: text-white fixed h-full z-40  ease-in-out duration-300 ${isOpen ? "translate-x-0 " : "translate-x-full"
                        }`}
                    >
                        <div className="flex justify-center lg:hidden" id="mobile-menu">
                            <div className=" pt-2 pb-3 space-y-1">
                                <Link
                                    to="/"
                                    className="text-white hover:text-greenlight duration-300 ease-out px-3 py-2 rounded-md text-base font-medium">
                                    Home
                                </Link>
                                <Link
                                    to="about"
                                    className="text-white hover:text-greenlight  duration-300 ease-out block px-3 py-2  text-base font-medium">
                                    About
                                </Link>
                                <Link
                                    to="skills"
                                    className="text-white hover:text-greenlight  duration-300 ease-out block px-3 py-2 text-base font-medium">
                                    Skills
                                </Link>
                                <Link
                                    to="projects"
                                    className="text-white hover:text-greenlight  duration-300 ease-out block px-3 py-2  text-base font-medium">
                                    Projects
                                </Link>
                                <Link
                                    to="contact"
                                    className="text-white hover:text-greenlight  duration-300 ease-out block px-3 py-2  text-base font-medium">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

