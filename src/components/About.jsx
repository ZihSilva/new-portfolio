import React from "react";
import photo from "../assets/fotoPortfolio.png";
import { motion } from "framer-motion";


export function About() {
  return (

    <div name="about"
      className="bg-beige dark:bg-slate-900 z-30 mx-auto">
      <section className="container relative flex flex-col items-start justify-center flex-grow px-5 mx-auto md:px-20 lg:px-24 section">
        <div className="flex flex-col">
          <motion.div
            transition={{ duration: 0.7 }}
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          >
            <h2 className="text-5xl text-white">About</h2>
            <hr className="bg-greendark w-32 h-1.5 mt-4 mb-6 border-0"></hr>
            <div className="flex flex-col-reverse text-white items-start w-full md:flex-row">
              <div className="flex flex-col w-full md:pr-8 md:w-3/5">
                <p className="text-lg">
                  Hello! I'm a frontend developer living in Vancouver Island.
                  I specialize in creating I specialize in creating{" "}
                  <span className="text-lg text-greendark shadow-white">
                    beautiful, usable, and professional{" "}
                  </span>
                  websites.{" "}
                </p>
                <p className="text-lg mt-3">With a background in teaching, I made a career transition to
                  web development and discovered a perfect blend of logic and creative design.  {""}
                </p>
                <p className="text-lg mt-3">
                  Proficient in HTML, CSS, JavaScript, React, and Tailwind,{" "}
                  <span className="text-lg">
                    I'm continuously expanding my skills.
                  </span>{" "}
                </p>
                <p className="text-lg mt-3">
                  Beyond coding, I find inspiration in nature and
                  embrace mindfulness practices like yoga and meditation.
                </p>
                <p className="text-lg mt-3">
                  Explore my work and reach out if you're interested in collaborating!
                </p>
              </div>
              <div className="w-6/12 flex mb-4 md:pr-6 md:mb-0 lg:w-4/12">
                <img
                  src={photo}
                  className="overflow-hidden rounded-md"
                  width={880}
                  height={880}
                  alt={"Zimarlen Silva"}
                />
              </div>
            </div>
          </motion.div >
        </div>
      </section>
    </div >
  );
}