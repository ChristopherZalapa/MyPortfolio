import React, { Component } from 'react';


class  Navbar extends Component {
    render () {
        return (
            <div className="container">
                <div className="navbar">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About Me</li>
                            <li>My Projects</li>
                            <li>My Skills</li>
                            <li>Contact Me</li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    } 
}

export default Navbar;