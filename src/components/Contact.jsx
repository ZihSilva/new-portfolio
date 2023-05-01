import { useState } from "react";

export function Contact() {
  //   const [name, setName] = useState(" ");
  //   const [email, setEmail] = useState(" ");
  //   const [message, setMessage] = useState(" ");

  //   const handleSubmit = (event) => {
  //     console.log("handleSubmit ran");
  //     event.preventDefault();

  //     setName(" ");
  //     setEmail(" ");
  //     setMessage(" ");
  //   };

  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");

  function handleSubmit(event) {
    console.log("handleSubmit ran")
    event.preventDefault();
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div
      name="contact"
      className="bg-beige dark:bg-slate-900 pb-4 px-10 py-10 dark:text-white w-full h-auto flex-col flex items-center font-myfont  justify-center"
    >
      <div className="w-80% lg:w-9/12 h-full flex flex-col justify-center">
      <div className="flex flex-col items-center">
  <h1 className="text-white dark:text-white flex flex-col justify-center text-4xl">
    Contact Me
  </h1>
  <hr className="bg-greendark w-9/12 h-1.5 mt-2 mb-6 border-0"/>
</div>
        <div className="mt-6 w-full sm:mx-auto md:text-lg md:w-[35rem] mx-auto lg:max-w-xl ">
          <form
            className=""
            onSubmit={handleSubmit}
            action="https://getform.io/f/91a24ebd-c8c9-4011-a23a-20ec57fa09d4"
            method="POST"
          >
            <div className="relative text-white">
              <input
                type="email"
                className="block w-full text-white h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-slate-600 bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
                onChange={handleChange}
                value={name}
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="relative mt-6">
              <input
                type="email"
                className="block w-full text-white h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-slate-600 bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
                onChange={handleChange}
                value={email}
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="relative mt-6">
              <input
                type="email"
                className="placeholder:-translate-y-14 w-full h-auto text-slate-600 min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-slate-600 bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
                onChange={handleChange}
                value={message}
                name="message"
                placeholder="Message"
                required
              />
            </div>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="text-white w-full h-12 p-1 mb-6 mt-6 border-2 shadow-lg shadow-greendark/50 border-greenlight bg-transparent b-4 dark:bg-slate-400 text-lg font-bold border-md rounded-lg  focus: hover:bg-greenlight hover:text-white cursor-pointer duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}