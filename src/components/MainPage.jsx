// import { Sidebar } from "./components/Sidebar";
// import { Navbar } from "./Navabar";
import { HomePage } from "./HomePage";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { SocialMedia } from "./SocialMedia";
import { SideNavigation } from "./SideNavigation";
import { Contact } from "./Contact";
import "../App.css";

export function MainPage() {
  return (
    <>
      {/* <Sidebar/> */}
      <HomePage />
      <SocialMedia />
      <SideNavigation />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </>
  );
}

