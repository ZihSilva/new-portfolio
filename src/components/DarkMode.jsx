import React, { useState } from 'react';
import { FaLightbulb, FaMoon } from 'react-icons/fa';

export function DarkMode() {
  const [ModeLight, setModeLight] = useState(false);

  const ModeHandle = () => {
    setModeLight(!ModeLight);
  };

  return (
    <div className={ModeLight ? 'FaMoon' : 'FaLightbulb'}>
      <div
        className="fixed top-7 sm:right-6 right-3 lg:right-6 text-2xl sm:text-3xl md:text-4xl lg:text-2xl cursor-pointer"
        onClick={ModeHandle}
      >
        <div className="dark:text-black-100 text-dark light:text-black-100">
          <FaMoon className={ModeLight ? 'block' : 'hidden'} />
          <FaLightbulb className={ModeLight ? 'hidden' : 'block'} />
        </div>
      </div>
    </div>
  );
}


