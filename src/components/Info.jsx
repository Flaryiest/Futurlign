import NavBar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import "/src/style/info.css"
import ScrollToTop from './ScrollToTop'
import { Fade } from "react-awesome-reveal"
function Info() {
    return <div className="info">
        <ScrollToTop/>
        <NavBar/>
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
        <div className="glowInfoOne"></div>
        <div className="glowInfoTwo"></div>
        <Footer/>
    </div>
}

export default Info