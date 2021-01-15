import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <div className="navbar">
                <div className='nav-name'>
                    Christopher Zalapa
                </div>
                <div className="navbar-container container">
                    <div 
                        className="menu-icon"
                        onClick={ handleClick }>
                        { click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                        <li className="nav-item">
                            <Link to = "homepage" activeClass = "active" spy = { true } smooth = { true } offset = { -80 } className = "nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "aboutme" activeClass = "active" spy = { true } smooth = { true } offset = { -80 } className = "nav-links">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "myprojects" activeClass = "active" spy = { true } smooth = { true } offset = { -80 } className = "nav-links">
                                My Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "mystack" activeClass = "active" spy = { true } smooth = { true } offset = { -80 } className = "nav-links">
                                My Stack
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "contact" activeClass = "active" spy = { true } smooth = { true } offset = { -80 } className = "nav-links">
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