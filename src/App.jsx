import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/Hero-Section/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection/>
    </>
  )
}

export default App
