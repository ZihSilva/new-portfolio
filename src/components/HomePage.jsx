// import profilePhoto from "../assets/profile-pic (3).png";
import { Link } from "react-scroll";
import TypewritterEf from "./Typewritter";


export function HomePage() {
    return (
        <div className="bg-beige dark:bg-slate-900 dark:text-white container relative z-30 mx-auto">
            <main className="flex-col flex h-screen">

                <div className="container relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-24 section">
                    <div className="w-full">
                        <span className="text-2xl font-semibold text-greendark">
                            Hello! 👋 My name is
                        </span>


                        <h1 className="mb-4 text-5xl md:text-7xl dark:text-white text-dark">
                            <TypewritterEf text="  Zimarlen " />
                        </h1>
                        <h2 className="mb-4 text-3xl md:text-4xl dark:text-light text-mid">
                            Web Developer
                        </h2>
                        <p className="w-4/5 text-xl md:w-full">
                        I design simple & professional websites
                        </p>
                        <Link to="contact" smooth={true} duration={500} >
                            <button className="mt-4 inline-flex h-14 items-center px-8 justify-center text-center font-semibold rounded-sm shadow-none self-start bg-greendark border-2 border-greendark hover:bg-green300 hover:border-green300 dark:text-white text-white focus:outline-none focus:ring-0 transition-all duration-150 ease-in-out">
                                Hire me
                            </button>
                        </Link>

                    </div>
                </div>
            </main>
        </div>
    );
}
