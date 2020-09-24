import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className = "brand-logo" href ="/">Poki's Time</a>
                <ul className = "right">
                    <li><NavLink to ="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar