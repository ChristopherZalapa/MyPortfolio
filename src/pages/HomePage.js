import React, { Component } from 'react'
import AboutPage from './AboutPage';
import MyProjects from './MyProjects'
import MyStack from './MyStack'
import ContactPage from './ContactPage'

class HomePage extends Component {
    render () {
        return (
            <div>
                <div id="homepage" className="homePageContainer">
                    <div className='home-background-pic'></div>
                </div>
                <AboutPage />
                <MyProjects />
                <MyStack />
                <ContactPage />
            </div>
        )
    }
}

export default HomePage;