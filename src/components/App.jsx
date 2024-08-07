import { useState, useEffect } from 'react'

import '/src/style/App.css'
import NavBar from './Navbar'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import Banner from './Banner'
import Footer from './Footer'
function App() {
  const [position, setPosition] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
      const handleScroll = () => {
          let moving = window.scrollY
          setVisible(position > moving)
          setPosition(moving)
      }
      window.addEventListener("scroll", handleScroll)
      return(() => {
          window.removeEventListener("scroll", handleScroll)
      })
  })   

  const cls = visible ? "visible" : "hidden"

  return (
    <div className="appContent">
      <NavBar/>
      <SectionOne/>
      <Banner></Banner>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
      
    </div>
  )
}

export default App
