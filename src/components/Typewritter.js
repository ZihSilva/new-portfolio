import React from "react";
import ReactTypingEffect from 'react-typing-effect';

export function Typewritter(){
  return (
    <div>
      <ReactTypingEffect
                    typingDelay={200}
                    speed={30}
                    eraseSpeed={30}
                    eraseDelay={1500}
                    text={[
                      `Frontend Developer`,
                      `Teacher`,
                      `Cat Mom`,
                      `Sushi Lover`,
                    ]}
                  />
    </div>
  )
}