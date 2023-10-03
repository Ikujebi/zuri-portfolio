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
import  Layout  from './layout/Layout'





function App() {
 
 
  return (
    <Routes >
      <Route path='/' element={<Layout/>} />
      <Route path='/nav' element={<CustomNavbar/>} />
      <Route path='/header' element={<Header/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/stack' element={<Stack/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/footer' element={<Footer/>} />
    </Routes>
  )
}

export default App

