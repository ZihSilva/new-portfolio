import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import data from "../data"


export function Projects() {

    return (
        <section
            name="projects"
            className="bg-beige dark:bg-slate-900 dark:text-white  z-30 mx-auto flex flex-col px-10 w-full md:px-20 lg:px-24 pt-10 section "
        >
            <div className="container relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-32 section">

                <h2 className="text-5xl">My Work</h2>
                <hr className="bg-greendark w-40 h-1.5 mt-4 mb-6 border-0"></hr>

                <p className="my-8 mx-2 dark:text-white text-slate-900 md:text-xl lg:pr-60">
                    Check out some of the personal projects I have been working on
                    lately. For a complete list, visit my
                    <a
                        className="ml-2 py-1 dark:text-white font-bold tracking-wider cursor-pointer border-yellow border-b-2 hover:border-yellow-300 dark:hover:border-yellow-600 transition ease-in duration-300"
                        href="https://github.com/ZihSilva"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Github Repository"
                    >
                        Github profile.
                    </a>
                </p>


                {/* grid container */}
                <div className="mt-4 dark:text-white mx-auto no-repeat center object-fit sm:my-4 md:mt-6  lg:grid-cols-2 gap-8 lg:gap-10">
                    {/* card one */}

                    {data.map((project) => {
                        return (
                            <div key={project.id} className="">
                                <img
                                    className="w-70 flex rounded-xl mb-7 transform group-hover:scale-105 transition ease-out duration-300 shadow-md  shadow-indigo-500/40 drop-shadow-2xl"
                                    src={project.img}
                                    alt="/"
                                />
                                <h3 className="text-xl dark:text-white max-auto md:text-2xl lg:text-4xl tracking-wide font-normal py-2 text-slate-900">
                                    {project.title}
                                    <a
                                        href={project.site}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        title="Live Site"
                                        className="ml-2 dark:text-white font-normal text-md md:text-xl border-yellow border-b-2  transition cursor-pointer ease-in duration-300"
                                    >
                                        Live Site
                                    </a>
                                </h3>
                                <div className="py-2 dark:text-white flex flex-wrap">
                                    {project.tools.map((tool, index) => (
                                        <span
                                            key={index}
                                            className="dark:text-white md:text-xl  max-auto rounded-lg py-1 px-1 text-slate-900 text-sm cursor-pointer transition ease-in duration-300"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <p className="py-2  dark:text-white max-auto md:text-xl text-slate-900">
                                    {project.description}
                                </p>
                                <div className="flex dark:text-white items-center md:text-xl mb-20">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        title="Github Repository"
                                        className="text-[15px] dark:text-white md:text-xl max-auto text-slate-900 tracking-wider uppercase text-md font-medium border-white border-b-2 transition ease-in duration-300 w-max"
                                    >
                                        View Repository
                                    </a>
                                    <IoIosArrowForward className="mb-0.5 dark:text-white text-slate-900" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section >
    );
};


