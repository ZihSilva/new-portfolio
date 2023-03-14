// import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./Navabar";
import { HomePage } from "./HomePage";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { SocialMedia } from "./SocialMedia";
import {SideNavigation} from "./SideNavigation";

import "../App.css";

function MainPage() {
  return (
    <div className="Portfolio">
      <Navbar />
      {/* <Sidebar/> */}
      <HomePage />
      <SocialMedia />
      <SideNavigation/>
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default MainPage;