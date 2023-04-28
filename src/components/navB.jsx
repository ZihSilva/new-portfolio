import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Transition } from "@headlessui/react"


export function NavB() {

    const [isOpen, setIsOpen] = useState(false);



    return (
        <div>
            <nav className="bg-beige">
                <div className="max-w7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <p className="h-8 w-40 text-white">Zimarlen Silva
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-96 flex items-end  space-x-4">
                                    <Link
                                        to="/"
                                        className=" text-white hover:bg-greenlight hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                        Home
                                    </Link>
                                    <Link
                                        to="about"
                                        className=" text-white hover:bg-greenlight hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                        About
                                    </Link>
                                    <Link
                                        to="skills"
                                        className=" text-white hover:bg-greenlight hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                        Skills
                                    </Link>
                                    <Link
                                        to="projects"
                                        className=" text-white hover:bg-greenlight hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                        Projects
                                    </Link>
                                    <Link
                                        to="Contact"
                                        className=" text-white hover:bg-greenlight hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                        Contact
                                    </Link>
                                    <button className="text-white bg-transparent border-2 border-greenlight shadow-lg shadow-greendark/50 hover:bg-greendark focus:ring-4 focus:outline-none hover:bg-transparent text-white font-bold py-2 px-4 rounded">
                                        <li className="z-50 hidden md:hidden list-none lg:inline-block">
                                            <a
                                                href={`mailto:zimarlensilva@gmail.com`}
                                                className="ml-1 btn-md group"
                                            >
                                                Hire me
                                            </a>
                                        </li>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="-mr2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-white bg-transparent border-2 border-greenlight shadow-lg shadow-greendark/50 hover:bg-greendark focus:ring-4 focus:outline-none  font-medium  text-sm px-4 mt-6 py-2 text-center bg-white inline-flex items-center justify-center p-2 rounded-md text-white hover:text-greenlight hover:bg-transparent focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-offset-gra-800 focus-ring-white "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="hidden h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="/"
                                    className="text-white hover:bg-greenlight hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Home
                                </Link>
                                <Link
                                    to="about"
                                    className="text-white hover:bg-greenlight hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    About
                                </Link>
                                <Link
                                    to="skills"
                                    className="text-white hover:bg-greenlight hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Skills
                                </Link>
                                <Link
                                    to="projects"
                                    className="text-white hover:bg-greenlight hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Projects
                                </Link>
                                <Link
                                    to="contact"
                                    className="text-white hover:bg-greenlight hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    )
}
