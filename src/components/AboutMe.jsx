import React from "react";
import photo from "../assets/photo3.png";
// import Skills from "../Skills/Skills";

export function AboutMe() {
  return (


    <div className="bg-beige dark:bg-slate-900 dark:text-white z-30 mx-auto">

      <div className="container relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-32 section">
        <div className="w-ful px-3">

        <div className="flex flex-col">
          <h2 className="text-5xl">About</h2>
          <hr className="bg-greendark w-40 h-1.5 mt-4 mb-6 border-0"></hr>

          <div className="flex flex-col-reverse items-start w-full md:flex-row">
            <div className="flex flex-col w-full md:pr-8 md:w-3/5">
              <p className="text-lg">
                Hello! I'm a frontend developer living in Vancouver Island.
                I specialize in creating I specialize in creating{" "}
                <span className="text-lg text-greendark">
                  beautiful, usable, and professional{" "}
                </span>
                websites.{" "}
              </p>

              <p className="text-lg">A year ago, I made a career transition from teaching in
                a lively preschool to becoming a web developer. I'm thrilled to
                be working in an industry that marries my two passions: logic
                and creative design.  {""}
              </p>
              <p className="text-lg">
                Today, I'm proficient in{" "}
                <span className="text-lg">
                  HTML, CSS, JavaScript, React, and Tailwind,
                </span>{" "}
                and I'm always eager to learn more.
              </p>
              <p className="text-lg">
                When I'm not coding, I love being in nature and I'm also a big
                fan of mindfulness practices like yoga and meditation, as well
                as diverse music genres.
              </p>
              <p className="text-lg">
                Take a look at my work below to see what I&apos;m working
                on, and get in touch if you&apos;d like to work together!
              </p>

            </div>
            <div className="flex w-full  h-full  mb-4 md:pl-8 md:w-3/12 md:mb-0">
              <img
                src={photo}
                className="overflow-hidden rounded-md"
                width={480}
                height={480}
                alt={"Zimarlen Silva"}
              />
            </div>
          </div>
        </div>
      </div>
</div>
  </div>

  );
}