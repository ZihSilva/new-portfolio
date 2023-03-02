import React  from "react";
import photo from "../assets/profile-pic (3).png";

export function About() {

    // const headerRef = useRef(null);
    // const homeRef = useRef(null);
    // const aboutRef = useRef(null);
    // const skillsRef = useRef(null);
    // const myWorkRef = useRef(null);
    // const contactRef = useRef(null);

  return (
    <div>
      <section
            className="flex flex-col w-full px-0 md:px-20 lg:px-24 py-28 section"
            id="about"
            
          >
            <div className="flex flex-col">
              <h2 className="text-5xl">About</h2>
              <hr className="bg-brand w-40 h-1.5 mt-4 mb-6 border-0"></hr>

              <div className="flex flex-col-reverse items-start w-full md:flex-row">
                <div className="flex flex-col w-full md:pr-8 md:w-3/5">
                  <p className="text-lg">
                    Hello! I&apos;m Dan and I&apos;m a frontend developer,
                    designer and teacher from Bristol, England.
                  </p>
                  <p className="text-lg">
                    After building my first website aged thirteen, I knew I
                    wanted to work with computers and technology, and I&apos;ve
                    never looked back.
                  </p>
                  <p className="text-lg">
                    After graduating University with a Media degree, I began
                    freelancing as a designer, creating graphics, video content
                    and websites for small businesses, using content management
                    systems like Wordpress, Joomla and Squarespace.
                  </p>
                  <p className="text-lg">
                    In recent years, I&apos;ve been focused on programming,
                    building a solid frontend stack and creating exciting
                    projects that solve real-world problems.
                  </p>
                  <p className="text-lg">
                    Alongside my design and development work, I run a BA Media
                    Production degree course and a corporate video production
                    company called{" "}
                    <a
                      href="http://www.wearespotlight.co.uk"
                      target="_blank"
                      className="underline-link"
                      rel="noreferrer"
                    >
                      Spotlight Media
                    </a>
                    , so I like to keep busy!
                  </p>
                  <p className="text-lg">
                    Take a look at my work below to see what I&apos;m working
                    on, and get in touch if you&apos;d like to work together!
                  </p>
                </div>
                <div className="flex w-full h-full mb-4 md:pl-8 md:w-2/5 md:mb-0">
                  <img
                    src={photo}
                    className="overflow-hidden rounded-md"
                    width={880}
                    height={880}
                    alt={"Daniel Cranney headshot"}
                  />
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}
