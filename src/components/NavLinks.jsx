import React, { useState } from 'react';
import { Link } from 'react-scroll';




export function NavLinks() {

    const [linksOpen, setLinksOpen] = useState(false);

const toggleMenu = () => {
    setLinksOpen(!linksOpen);
    console.log(setLinksOpen);
}
    return (

            <div className="text-sm lg:text-lg text-white lg:mx-16 lg:flex-grow ">
                <Link
                    to="/"
                    smooth={true}
                    duration={500}
                    className="block font-semibold mt-4 lg:inline-block lg:mt-0 mr-12">
                    Home
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="block font-semibold mt-4 lg:inline-block lg:mt-0 mr-12">
                    About
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="block font-semibold mt-4 lg:inline-block lg:mt-0 mr-12">
                    Skills
                </Link>
                <Link
                    to="Projects"
                    smooth={true}
                    duration={500}
                    className="block font-semibold mt-4 lg:inline-block lg:mt-0 mr-12">
                    Projects
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="block font-semibold mt-4 lg:inline-block lg:mt-0 mr-12">
                    Contact
                </Link>
                {/* button */}
                <button
                    className="text-white bg-transparent border-2 border-greenlight shadow-lg shadow-greendark/50 hover:bg-greendark focus:ring-4 focus:outline-none  font-medium  text-sm px-4 mt-6 py-2 text-center ml-24 lg:mr-0 md:mr-0">
                    <li className="z-50   list-none lg:inline-block">
                        <a
                            href={`mailto:zimarlensilva@gmail.com`}
                            className="ml-1 btn-md group"
                        >
                            Hire me
                        </a>
                    </li>
                </button>
            </div>
    )
}

