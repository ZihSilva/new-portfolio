// import { Sidebar } from "./components/Sidebar";
import { Nav } from "./components/Nav";
import { HomePage } from "./components/HomePage";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { SocialMedia } from "./components/SocialMedia";
import { SideNavigation } from "./components/SideNavigation";
import { Contact } from "./components/Contact";
import "./App.css";


function App() {

  


  return (
      <div className="Portfolio" >
        <Nav />
        {/* <Sidebar/> */}
        <HomePage />
        <SocialMedia />
        <SideNavigation />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>

  );
}

export default App;
