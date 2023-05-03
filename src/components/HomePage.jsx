// import profilePhoto from "../assets/profile-pic (3).png";
import { Link } from "react-scroll";
import {Typewritter} from "./Typewritter.js";
// import { DarkMode } from "./DarkMode";


export function HomePage() {
    
    return (

        <div className="bg-beige text-dark  relative z-30 mx-auto">
            <main className="flex-col flex h-screen">
            <div className="container relative flex flex-col items-start justify-center flex-grow px-5 mx-auto md:px-20 lg:px-24 section">                    
            <div className="w-full ">
                        <h1 className="mb-4 text-5xl md:text-7x text-white">
                            Zimarlen
                        </h1>
                        <h2 className="mb-4 text-3xl text-greenlight md:text-4xl">
                            <Typewritter />
                        </h2>
                        <p className="w-4/5 text-xl md:w-full">
                            I design simple & professional websites
                        </p>
                        <Link to="contact" smooth={true} duration={500} >
                            <button className="mt-4 inline-flex h-14 items-center px-8 justify-center text-center font-semibold rounded-sm self-start bg-transparent  border-2 shadow-lg shadow-greendark/50 border-greenlight bg-transparent b-4 dark:bg-slate-400 text-lg font-bold border-md rounded-lg  focus: hover:bg-greenlight hover:text-white cursor-pointer duration-300">
                                Hire me
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
