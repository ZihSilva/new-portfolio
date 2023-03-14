import React, {useState} from 'react'
import { FaLightbulb, FaMoon } from "react-icons/fa";

export function DarkMode() {
    
const [ModeLight, setModeLight] = useState(true);

let icon = ModeLight ? "BsMoonStarsFill" : "FaLightbulb";

const ModeHandle = () => {
  setModeLight(!ModeLight);
};

return (
  <div className={ModeLight ? "light" : "dark"}>
    <div
      className="fixed top-5 sm:right-6 right-3 text-2xl sm:text-3xl md:text-4xl cursor-pointer"
      onClick={ModeHandle}
    >
      <div className="dark:text-white-100 text-dark  dark:text-white">
        <FaMoon className={ModeLight ? "block" : "hidden"} />
        <FaLightbulb className={ModeLight ? "hidden" : "block"} />
      </div>
    </div>
    </div>
)
}


