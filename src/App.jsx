import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import MainContent from './components/MainContent'
import Footer from "./components/Footer"

// import './App.css'

function App() {
  return (
    <div className='container'>
      <Header/>
      <MainContent/>
      <Footer/>
      </div>
  )
}

export default App
