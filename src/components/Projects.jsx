import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion"
import data from "../data"


export function Projects() {

    return (
        <div className="bg-beige dark:bg-slate-900 z-30 mx-auto">
        <section
            name="projects"
            className="bg-beige dark:bg-slate-900 dark:text-white z-30 mx-auto flex flex-col px-5 sm:px-0 w-full md:px-10 lg:pl-40 pt-20 section "
        >
           <motion.div
              transition={{ duration: 0.7 }}
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            >
            <div className="container relative flex flex-col items-start justify-center flex-grow mx-auto md:ml-3 lg:pl-0 lg:pr-36  section">
                <h2 className="text-5xl text-white">Projects</h2>
                <hr className="bg-greendark rounded-sm w-44 lg:w-44 h-1.5 mt-4 mb-6 border-0"></hr>
                <p className="my-8 mx-2 sm:mr-9 md:ml-0 dark:text-white text-white md:text-xl lg:pr-82">
                    Check out some of the personal projects I have been working on
                    lately. For a complete list, visit my
                    <a
                        className="ml-2 py-1 dark:text-white font-bold tracking-wider cursor-pointer border-greenlight border-b hover:border-green-400 dark:hover:border-yellow-600 transition ease-in duration-300"
                        href="https://github.com/ZihSilva"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Github Repository"
                    >
                        Github profile.
                    </a>
                </p>
                {/* grid container */}        
                 {/* card one */}
                <div className="mt-4 dark:text-white mx-auto no-repeat center object-fit sm:my-4 md:mt-12 grid lg:grid-cols-2 gap-2 lg:gap-6">
                    {data.map((project) => {
                        return (
                            <div key={project.id} className="m-0">
                                <img
                                    className="w-11/12 md:9/12 flex rounded-xl m-0 mb-7 lg:ml-0 transform group-hover:scale-105 transition ease-out duration-300 shadow-md  shadow-indigo-500/40 drop-shadow-2xl"
                                    src={project.img}
                                    alt="/"
                                />
                               
                                <h3 className="text-xl font-bold dark:text-white max-auto md:text-2xl lg:text-3xl  tracking-wide py-1 text-white">
                                    {project.title}
                                    <a
                                        href={project.site}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        title="Live Site"
                                        className="ml-2 dark:text-white font-normal text-md md:text-xl border-greenlight border-b  transition cursor-pointer ease-in duration-300"
                                    >
                                       Visit Site
                                    </a>
                                </h3>
                                <div className="py-2 dark:text-white flex flex-wrap">
                                    {project.tools.map((tool, index) => (
                                        <span
                                            key={index}
                                            className="dark:text-white md:text-xl  max-auto rounded-lg py-1 px-1 text-white text-sm cursor-pointer transition ease-in duration-300"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                     
                                </div>
                               
                                <p className="py-2 sm:pr-10 m-auto lg:pr-18 dark:text-white max-auto md:text-xl text-white">
                                    {project.description}
                                </p>
                                <div className="flex dark:text-white items-center md:text-xl mb-10">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        title="Github Repository"
                                        className="text-[15px] dark:text-white md:text-xl max-auto text-white tracking-wider uppercase text-md font-medium border-greenlight border-b transition ease-in duration-300 w-max"
                                    >
                                        View Repository
                                    </a>
                                    <IoIosArrowForward className="mb-0.5 dark:text-white text-white" />
                                </div>
                            </div>
                        );
                    })}
                     
                </div>
            </div>
            </motion.div>
        </section >
        </div>
    );
};


