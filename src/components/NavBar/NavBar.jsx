import { useState } from 'react'
import { Link } from "react-router-dom";
import links from "../../utils/navLink.js";
import NavBar_Toggle from "./NavBar_Toggle/NavBar_Toggle.jsx";
import "./Navbar.css";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (

    <header className="header">
      <NavBar_Toggle onToggleClick={toggleMenu} />
      {/* <div className="logo">
        <h1>Looting Trainer</h1>
      </div> */}
      
      <ul className={`navlist ${isOpen ? 'open' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
      
  
    </header>
  );
};

export default NavBar;


