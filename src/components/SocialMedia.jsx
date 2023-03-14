import { FaGithub, FaLinkedin } from "react-icons/fa";

export function SocialMedia() {

    return (

        <div className="fixed bottom-0 z-30 w-full">
            <div className="container relative flex h-full mx-auto">
                <div className="hidden absolute bottom-0 items-center mt-auto ml-auto group-hover:opacity-100 text-white right-8 md:flex md:flex-col">
                    <div className="relative group text-xl sm:text-2xl md:text-4xl lg:text-4xl   text-opacity-75   dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer">
                        <div className="hidden lg:block absolute text-black right-0 bottom-20 group-hover:opacity-80  duration-300 opacity-0 py-2 px-0 rounded-full">
                            <p className="text-base">Linkedin</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/zimarlen-silva/"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <FaLinkedin className="w-7 h-7 mb-8 text-black" />
                        </a>
                    </div>
                    <div className="relative group text-xl sm:text-2xl md:text-4xl lg:text-4xl text-opacity-75  dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer">
                        <div className="hidden lg:block absolute right-0 bottom-10 group-hover:opacity-80  duration-300 opacity-0 py-2 px-0 rounded-full">
                            <p className="text-base text-black">Github</p>
                        </div>
                        <a
                            href="https://github.com/ZihSilva"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <FaGithub className="w-7 h-7 text-black hover:socialMedia" />
                        </a>
                    </div>
                    <div className="w-0.5 dark:bg-white bg-dark h-24 opacity-20 mt-2 z-30"></div>
                </div>
            </div>
        </div>
    );
}

