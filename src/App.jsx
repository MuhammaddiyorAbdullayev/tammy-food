import {React, useState, useEffect} from 'react'
import './App.css'

// components
import Navbar from './Components/Navbar/Navbar'
import Entery from './Components/Entery/Entery'
import About from './Components/About/About'
import Pagination from './Components/Pagination/Main'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Entery/>
      <About/>
      <Pagination/>
      <Footer/>
      </>
  )
}

export default App