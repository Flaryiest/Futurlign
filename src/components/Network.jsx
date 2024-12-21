import NavBar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import Banner from "/src/components/Banner.jsx"
import ScrollToTop from './ScrollToTop'
import "/src/style/network.css"
import { Fade } from "react-awesome-reveal"
function Network() {
    return <div className="network">
        <ScrollToTop/>
        <NavBar/>
        <div className="network-content">
        <div className="network-team">
                <h2 className="network-header">Our Team</h2>
                <div className="network-directors">
                    <h3 className="network-sub-header">Directors</h3>
                    <div className="network-director-card-container">
                        <div className="network-director-card">
                            <div className="network-director-card-name">Qi Xuan Ding</div>
                            <div className="network-director-card-title">Founder, Director</div>
                            <img className="network-director-card-image" src="/assets/QiXuanDing.webp"></img>
                            <div className="network-director-card-description">Qi Xuan is the founder of Futurlign, and is the executive director.</div>
                        </div>
                        <div className="network-director-card">
                            <div className="network-director-card-name">Eric Zuo</div>
                            <div className="network-director-card-title">Co-Founder, Director of Technology</div>
                            <img className="network-director-card-image" src="/assets/EricZuo.webp"></img>
                            <div className="network-director-card-description">Eric is one of the co-founders of Futurlign, and is the current director of technology.</div>
                        </div>
                        <div className="network-director-card">
                            <div className="network-director-card-name">Evan Li</div>
                            <div className="network-director-card-title">Co-Founder, Director of Communications</div>
                            <img className="network-director-card-image" src="/assets/EvanLi.webp"></img>
                            <div className="network-director-card-description">Evan Li is one of the co-founders of Futurlign, and is the current director of communications.</div>
                        </div>
                    </div>
                </div>
            </div>
        <Banner />
        
        <div className="infoTemp">
            <div className="infoContent">
                <div className="infoSection">
                    <Fade><div className="infoSectionHeader"><span className="purple">Core Principles:</span></div></Fade>
                    <ul className="infoSectionList">
                        <li className="infoSectionListItem">Providing accessible learning resources in AI and coding as a fundamental right for all.</li>
                        <li className="infoSectionListItem">Ensuring AI technologies are developed responsibly and align with human values</li>
                        <li className="infoSectionListItem">Promoting teamwork and partnerships to inspire innovative solutions for global challenges.</li>
                    </ul>
                </div>
                <div className="infoSection">
                    <div className="infoSectionHeader">Motivation</div>
                    <div className="infoSectionText">At Futurlign, we are driven by the belief that education in AI and coding can empower individuals to shape a better future. We aim to inspire curiosity and innovation among youth, encouraging them to explore the limitless possibilities of technology. Our motivation lies in creating a supportive environment where young minds can thrive and make meaningful contributions to society.</div>
                </div>
                <div className="infoSection">
                    <div className="infoSectionHeader">What</div>
                    <div className="infoSectionText">Futurlign offers workshops, coding classes, and resources focused on AI and alignment to equip individuals with essential skills. We provide hands-on learning experiences that foster creativity and critical thinking in technology. Through our programs, we aim to inspire the next generation to engage with AI and coding responsibly and innovatively.</div>
                </div>
                <div className="infoSection">
                    <div className="infoSectionHeader">Who</div>
                    <div className="infoSectionText">Futurlign is a youth-run non-profit organization dedicated to educating individuals about AI, alignment, and coding. Our team comprises passionate young leaders committed to making technology accessible to everyone. We strive to create a global community where individuals can learn, collaborate, and innovate together.</div>
                </div>
            </div>    
        </div>
        </div>
                
        <Footer/>
    </div>
}

export default Network