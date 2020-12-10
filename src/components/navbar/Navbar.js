import React from 'react';
import { Link } from 'react-router-dom'

function Navbar () {
    
    return (
        <div className="container">
            <div className="navbar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/myprojects">My Projects</Link>
                        </li>
                        <li>
                            <Link to="/myskills">My Skills</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )

}

export default Navbar;