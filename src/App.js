import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Featured from './Components/Featured/Featured'
import Recommended from './Components/Recommended/Recommended'
import Online from './Components/OnlineRadio/Online'
import Artists from './Components/Artists/Artists'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Featured />
      <Recommended />
      <Online />
      <Artists />
      <Footer />
    </>
  )
}

export default App