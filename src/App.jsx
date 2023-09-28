import React from 'react'
import { Routes, Route, Navigate  } from 'react-router-dom';
import '../src/index.css';
import '../src/App.css';
import { useState } from 'react';
import ayanfe from "./assets/images/ayanfe.png";
import Header from './layout/Home'
import CustomNavbar from './layout/sideBar'
import Portfolio from './layout/Portfolio'
import Services from './layout/MyServices';
import Stack from './layout/WhatIKnow';
import Contact from './layout/Contact'
import Footer from './layout/Footer'





function App() {
 
 
  return (
    <Routes >
      <Route />
      <CustomNavbar />
      <Header />
      <Services/>
      <Stack/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      
    </Routes>
  )
}

export default App

