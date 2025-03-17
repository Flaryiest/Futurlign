import "/src/style/App.css"
import Marquee from "react-fast-marquee"

function Banner() {
    return <div className="banner">
    <h2 className="banner-header">Our Partners</h2>
    <div className="supporter-logos">
        <img className="supporter-logo" src="/assets/government-logo.png"></img>
    </div>
    </div>

}

export default Banner