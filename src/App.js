import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import React,{Component } from 'react';

function App() {

  return (
      <>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About title=" AlexWilliams" />} />
              <Route path="/contact" element={<Contact />}/>
          </Routes>
      </> 
  )
}

export default App;
