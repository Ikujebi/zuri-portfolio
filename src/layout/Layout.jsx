
import '../../src/index.css';
import '../../src/App.css';
import Header from './Home'
import CustomNavbar from './sideBar'
import Portfolio from './Portfolio'
import Services from './MyServices';
import Stack from './WhatIKnow';
import Contact from './Contact'
import Footer from './Footer'
import Certi from '../conmponents/CertiStyle'
import { NightModeProvider } from '../conmponents/NightModeContext';





function App() {
 
 
  return (
    <NightModeProvider>
    <div className='lato'>
      <CustomNavbar />
      <Header />
      <Certi/>
      <Services/>
      <Stack/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      
    </div>
    </NightModeProvider>
  )
}

export default App

