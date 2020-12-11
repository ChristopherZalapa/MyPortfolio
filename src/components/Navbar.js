import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <div 
                        className="menu-icon"
                        onClick={ handleClick }>
                        { click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/myprojects" className="nav-links">
                                My Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/mystack" className="nav-links">
                                My Stack
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links">
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar