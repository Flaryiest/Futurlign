import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '/src/style/App.css'
import NavBar from './Navbar'
import Footer from "./Footer"
import Banner from './Banner'
import ScrollToTop from './ScrollToTop'
import Fade from "react-awesome-reveal"
function App() {
  return (
    <div className="app-content">
    <ScrollToTop />
    <NavBar />
    <div className="section-one">
      <div className="section-one-content">
        <Fade>
          <div className="section-one-sub-header">
            <span className="section-one-sub-header-two">Artificial Intelligence is changing the world.</span>
          </div>
          <h1 className="section-one-header"><span className="aqua">Our mission is to ensure this change benefits everyone.</span></h1>
        </Fade>
        <div className="section-one-text">Founded by passionate individuals with diverse backgrounds, we are a registered Canadian non-profit organization striving to promote understanding and awareness of AI’s potential impact on our lives.</div>
        <Link to="/info" className="section-one-button">
          <div>About</div>
        </Link>
        <div className="glow-one"></div>
        <img className="section-one-image" id="up" src="/assets/index-image-ai.png" alt="AI Illustration" />
        <div className="glow-two"></div>
        <div className="glow-three"></div>
      </div>
    </div>
    <Banner />
    <div className="section-two">
  <div className="section-two-content">
    <Fade>
      <h2 className="section-two-header">What We Hope To Accomplish</h2>
    </Fade>
    <div className="section-two-statement">
      <div className="section-two-statement-header">Support</div>
      <div className="section-two-statement-text">
        We aim to build a global community where individuals, regardless of background, can access resources to learn about AI, alignment, and coding. By providing mentorship and guidance, we empower youth to explore these fields and create impactful solutions.
      </div>
    </div>
    <div className="section-two-statement">
      <div className="section-two-statement-header">Education</div>
      <div className="section-two-statement-text">
        Our goal is to make AI, alignment, and coding education accessible to everyone. By offering workshops, tutorials, and practical projects, we aim to equip people with the skills needed to shape the future of technology.
      </div>
    </div>
    <div className="section-two-statement">
      <div className="section-two-statement-header">Alignment</div>
      <div className="section-two-statement-text">
        We are committed to advancing education on AI alignment, emphasizing developing AI systems that align with human values and promote safety. Through fostering a deeper understanding of the ethical considerations surrounding AI, we seek to encourage responsible and informed innovation.
      </div>
    </div>
    <div className="section-two-statement">
      <div className="section-two-statement-header">Innovation</div>
      <div className="section-two-statement-text">
        At Futurlign, we drive innovation by equipping individuals with the tools and resources needed to explore new ideas in AI and coding. By emphasizing experimentation and critical thinking, we inspire the next generation to create transformative innovations.
      </div>
    </div>
  </div>
</div>
    <div className="section-three">
      <div className="section-three-content">
        <div className="section-three-left">
          <img
            className="section-three-image-overlap"
            src="/assets/SectionThreeImageTwo.webp"
            alt="Overlap Image"
          />
        </div>
        <div className="section-three-right">
          <h2 className="section-three-header">Education is a commodity</h2>
          <div className="section-three-text">
            Awareness is the first step. Education should be a fundamental right, accessible to all without the barrier of cost. In today’s rapidly evolving technological landscape, knowledge in AI and coding has become essential for personal and professional growth. At Futurlign, we strive to provide comprehensive learning resources and mentorship free of charge.
      </div>
    </div>
  </div>
</div>

    <div className="section-four">
      <div className="section-four-content">
        <Fade><h2 className="section-four-header">Support Us</h2></Fade>
        <div className="faq-container">
          <div className="section-four-main-text">As a registered Canadian non-profit, we rely on your support in our pursuit of our mission. If you would like to help fund us and donate, please reach out to us at <a className="aqua bold" href="mailto: info.futurlign@gmail.com">info.futurlign@gmail.com</a>. We truly value any and all donations that we receive.</div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default App
