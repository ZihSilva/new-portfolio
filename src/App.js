// import { Sidebar } from "./components/Sidebar";
// import { Nav } from "./components/Nav";
// import {Navbar} from "./components/Navabar";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { SocialMedia } from "./components/SocialMedia";
import { SideNavigation } from "./components/SideNavigation";
import { Contact } from "./components/Contact";
import "./App.css";
// import { Header } from "./components/Header"
import { NavB } from "./components/Navb";
// import { NavB } from "./components/Navb";
// import { NavB } from "./components/Navb";


function App() {


  return (
      <>
      <NavB/>
       <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>
     </>
     

  );
}

export default App;
