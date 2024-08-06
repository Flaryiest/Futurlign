import { useState, useEffect } from 'react'

import '/src/style/App.css'
import NavBar from './Navbar'

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
    </div>
  )
}

export default App
