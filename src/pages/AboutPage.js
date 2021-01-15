import React, { Component } from 'react';
// import ChrisPic from '../public/images/9TksEPPg-removebg-preview.png'

class AboutPage extends Component {
    render() {
        return (
            <div id="aboutme" className="aboutPageContainer">
                <div className="text-container">
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae quos unde numquam id possimus? Officiis modi esse alias ipsam sequi repellat cumque, quidem repellendus suscipit, doloremque, provident inventore nostrum!</p>
                </div>
                <div className="pic-container">
                    <img src="/images/9TksEPPg-removebg-preview.png" alt="man"/>
                </div>
            </div>
        )
    }
}

export default AboutPage;