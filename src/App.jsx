import {React, useEffect} from 'react'
import './App.css'

// components
import Navbar from './Components/Navbar/Navbar'
import Entery from './Components/Entery/Entery'
import About from './Components/About/About'

const App = () => {

  return (
    <> 
      <Navbar/>
      <Entery/>
      <About/>
    </>
  )
}

export default App