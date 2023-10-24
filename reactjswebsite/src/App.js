import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Serices'
import Contact from './Components/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Contact/>
    </>
  );
}

export default App;
