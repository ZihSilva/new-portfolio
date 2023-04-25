// import profilePhoto from "../assets/profile-pic (3).png";
import { Link } from "react-scroll";
import TypewritterEf from "./Typewritter";
import { DarkMode } from "./DarkMode";



export function HomePage() {
    return (
   

        <div className="bg-beige text-dark dark:bg-slate-900 dark:text-white  relative z-30 mx-auto">
            <main className="flex-col flex h-screen">

                <div className="container relative flex flex-col items-center justify-center flex-grow px-10 mx-auto md:px-20 lg:px-32 section">
                   
                    <div className="w-full">
                   
                        {/* <span className="text-2xl font-semibold text-">
                            Hello👋&nbsp; My name is
                        </span> */}
                        <h1 className="mb-4 text-5xl md:text-7xl dark:text-white text-white">
                            Zimarlen
                        </h1>
                        <h2 className="mb-4 text-3xl text-greenlight md:text-4xl">
                        <TypewritterEf />
                        </h2>
                        <p className="w-4/5 text-xl md:w-full">
                            I design simple & professional websites
                        </p>
                        <Link to="contact" smooth={true} duration={500} >
                            <button className="mt-4 inline-flex h-14 items-center px-8 justify-center text-center font-semibold rounded-sm self-start bg-transparent  border-2 shadow-lg shadow-greendark/50 border-greendark hover:bg-green300 hover:border-green300 dark:text-white text-white focus:outline-none focus:ring-0 transition-all duration-150 ease-in-out">
                                Hire me
                            </button>
                        </Link>
                      
                    </div>
                </div>
            </main>
        </div>
    
    );
}
