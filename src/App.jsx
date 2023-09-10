import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/Hero-Section/HeroSection'
import ContactMe from './Components/ContactMe/ContactMe'
import HotTopics from './Components/HotTopics/HotTopics'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection/>

      <HotTopics/>

      <ContactMe/>
    </>
  )
}

export default App
