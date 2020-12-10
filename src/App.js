import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Routes from './config/Routes'

import Navbar from './components/navbar/Navbar'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      { Routes }
    </div>
  );
}

export default App;