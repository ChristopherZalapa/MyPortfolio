import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MyProjects from './pages/MyProjects'
import MyStack from './pages/MyStack'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

import './styles/styles.scss';

function App () {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path="/about" component={ AboutPage } />
        <Route path="/myprojects" component={ MyProjects } />
        <Route path="/mystack" component={ MyStack } />
        <Route path="/contact" component={ ContactPage } />
      </Switch>
    </Router>
  )
}
export default App;