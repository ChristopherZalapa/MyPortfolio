import React, { Component } from 'react';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MyProjects from './pages/MyProjects'
import MySkills from './pages/MySkills'
import ContactPage from './pages/ContactPage'

import './App.scss';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <HomePage />
        <AboutPage />
        <MyProjects />
        <MySkills />
        <ContactPage />
      </div>
    );
  }
}
export default App;