import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Routes from './config/Routes'
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        { Routes }
      </div>
    </Router>
  );
}

export default App;