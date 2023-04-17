import React from "react";
import Typewritter from "typewriter-effect";

const TypewritterEf = ({ text }) => {
  return (
    <div>
      <Typewritter
        onInit={(typewriter) => {
          typewriter
          .typeString('Frontend Developer')
          .changeDelay(30)
          .pauseFor(2500)
          .deleteAll(50)
          .start()
          .typeString('Teacher')
          .pauseFor(2500)
          .deleteAll()
          .start()
          .typeString('Cat Mom')
          .pauseFor(2500)
          .deleteAll()
          .start()
          .typeString('Nature lover')
          .pauseFor(2500)
          .deleteAll()
          .start()
          
        }}
      />
    </div>
  );
};

export default TypewritterEf;