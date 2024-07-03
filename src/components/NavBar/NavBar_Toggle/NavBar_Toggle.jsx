import React from 'react'
import "../Navbar.css";

const NavBar_Toggle = ({ isOpen, onToggleClick }) => {
    return (

        <div className="navbar-toggle-wraper">
            <div className="navbar-toggle" onClick={onToggleClick}>
                <div className={`toggle-line ${isOpen ? 'open' : ''}`}></div>
                <div className={`toggle-line ${isOpen ? 'open' : ''}`}></div>
                <div className={`toggle-line ${isOpen ? 'open' : ''}`}></div>
            </div>
        </div>
    );
};

export default NavBar_Toggle;