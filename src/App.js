import React from 'react';
import logo from './logo.svg';
import {Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Nav from './components/nav'
import MainCard from './components/MainCard'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <MainCard/>
    </div>
    </Router>
  );
}

export default App;
