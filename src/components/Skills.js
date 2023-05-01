import React from "react";
import { motion } from "framer-motion";


export function Skills() {
  return (
    <div name="skills"
    className="bg-beige dark:bg-slate-900 text-white dark:text-white z-30 mx-auto">
      <div className="container relative flex flex-col items-start justify-center flex-grow pl-10 sm:pr-0 sm:gap-8 pt-20 pb-10 mx-auto md:px-20  section">
      <div className="w-full">
      <div className="flex-col flex ">
        <div className="w-full md:w-11/12 xl:w-full flex-col lg:ml-16 md:flex-wrap">
        <motion.div
              transition={{ duration: 0.7 }}
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            >
        <div>
        <h2 className="text-5xl">Skills</h2>
        <hr className="bg-greendark w-28 h-1.5 mt-4 mb-6 border-0"></hr>

         {/* grid icons */}
          <ul className="grid grid-cols-3 sm:grid-cols-4 w-50% mt-8 pr-4 sm:pr-0 gap-10 md:grid-cols-4 md:pr-32 lg:w-80% lg:mt-20 lg:gap-10 ">
            <li className="flex-wrap space-around w-full text-center flex-col text-white text-md">
              <img
                className="h-10 flex justify-center self-center"
                src="https://www.svgrepo.com/show/452228/html-5.svg"
                alt="HTML"
              />
              {/* <p className="flex items-start mt-2 text-md">HTML</p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col text-white text-md">
              <img
                className="h-10  contain flex justify-center self-center"
                src="https://www.svgrepo.com/show/452185/css-3.svg"
                alt="CSS3"
              />
              {/* <p className="flex items-start mt-2 text-md">CSS</p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col text-white text-md">
              <img
                className="h-10 flex justify-center self-center"
                src="https://www.svgrepo.com/show/349419/javascript.svg"
                alt="javascript"
              />
              {/* <p className="flex items-start mt-2 text-md">
                Javascript
              </p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col text-white text-md">
              <img
                className="h-10 flex justify-center self-center bg-white"
                src="https://www.svgrepo.com/show/473768/react.svg"
                alt="React"
              />
              {/* <p className="flex items-start mt-2 text-md">React</p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col   text-white text-md">
              <img
                className="h-10 flex justify-center self-center bg-white"
                src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
                alt="Github"
              />
              {/* <p className="flex items-start mt-2 text-md">Github</p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col   text-white text-md">
              <img
                className="h-10 flex justify-center self-center bg-white"
                src="https://www.svgrepo.com/show/503445/nodejs.svg"
                alt="NodeJs"
              />
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col text-white text-md">
              <img
                className="h-10 mr-4 flex justify-center self-center bg-white"
                src="https://www.svgrepo.com/show/439231/mongodb.svg"
                alt="react"
              />
              {/* <p className="flex items-start mt-2 text-md">MongoDB</p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col text-white text-md">
              <img
                className="h-10 flex justify-center self-center bg-white"
                src="https://www.svgrepo.com/show/353724/express.svg"
                alt="react"
              />
              {/* <p className="flex items-start mt-2 text-md">Express</p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col text-white text-md">
              <img
                className="h-10 flex justify-center self-center bg-white"
                src="https://www.svgrepo.com/show/333609/tailwind-css.svg"
                alt="tailwind"
              />
              {/* <p className="flex items-start mt-2 text-md">Tailwind</p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col text-white text-md">
              <img
                className="h-10 flex justify-center self-center"
                src="https://seeklogo.com/images/J/json-logo-265700B506-seeklogo.com.jpg"
                alt="json"
              />
              {/* <p className="flex items-start mt-2 text-md">JSON</p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col   text-white text-md">
              <img
                className="h-10 flex justify-center self-center"
                src="https://seeklogo.com/images/C/canva-logo-B4BE25729A-seeklogo.com.png"
                alt="Canva"
              />
              {/* <p className="flex items-start mt-2 text-md">Canva</p> */}
            </li>

            <li className="flex-wrap space-around w-full text-center flex-col   text-white text-md">
              <img
                className="h-10 flex justify-center self-center bg-white"
                src="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png"
                alt="Figma"
              />
              {/* <p className="flex items-start mt-2 text-md">Figma</p> */}
            </li>
          </ul>
        </div>
        </motion.div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
