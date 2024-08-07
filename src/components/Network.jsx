import NavBar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import Banner from "/src/components/Banner.jsx"
import ScrollToTop from './ScrollToTop'
import "/src/style/network.css"
function Network() {
    return <div className="network">
        <ScrollToTop/>
        <NavBar/>
        <div className="networkContent">
            <Banner/>
        </div>
        <Footer/>
    </div>
}

export default Network