import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage'
import MyProjects from '../pages/MyProjects'
import MySkills from '../pages/MySkills'
import ContactPage from '../pages/ContactPage'


export default (
    <Switch>
        <Route path = "/about" component = { AboutPage } />
        <Route path = "/projects" component = { MyProjects } />
        <Route path = "/skills" component = { MySkills } />
        <Route path = "/contact" component = { ContactPage } />
        <Route exact path = "/" component = { HomePage } />
    </Switch>
)