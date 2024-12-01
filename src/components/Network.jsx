import NavBar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import Banner from "/src/components/Banner.jsx"
import ScrollToTop from './ScrollToTop'
import "/src/style/network.css"
function Network() {
    return <div className="network">
        <ScrollToTop/>
        <NavBar/>
        <div className="network-content">
            <Banner/>
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
        </div>
        <Footer/>
    </div>
}

export default Network