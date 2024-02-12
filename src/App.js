import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Featured from './Components/Featured/Featured'
import Recommended from './Components/Recommended/Recommended'
import Online from './Components/OnlineRadio/Online'

const App = () => {
  return (
    <>
      <Navbar />
      <Featured />
      <Recommended />
      <Online />
    </>
  )
}

export default App