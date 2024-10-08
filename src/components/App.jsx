import { useState, useEffect } from 'react'

import '/src/style/App.css'
import NavBar from './Navbar'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import Banner from './Banner'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
function App() {
  return (
    <div className="appContent">
      <ScrollToTop/>
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
