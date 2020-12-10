import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class  Navbar extends Component {
    render () {
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
                                <Link to="/projects">My Projects</Link>
                            </li>
                            <li>
                                <Link to="/skills">My Skills</Link>
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
}

export default Navbar;