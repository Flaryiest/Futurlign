import "/src/style/App.css"
import Marquee from "react-fast-marquee"

function Banner() {
    return <div className="banner">
    <div className="bannerHeader">Our Partners</div>
    <Marquee className="marquee">
        <div className="bannerItem">Government Of Canada</div>
        <div className="bannerItem">University Of Calgary</div>
        <div className="bannerItem">Calgary Public Library</div>
        <div className="bannerItem">Sir Winston Churchill High School</div>
        <div className="bannerItem">Western Canada High School</div>
        <div className="bannerItem">Westmount Charter School</div>
    </Marquee>
    </div>

}

export default Banner