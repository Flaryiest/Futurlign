import "/src/style/App.css"
import Marquee from "react-fast-marquee"

function Banner() {
    return <div className="banner">
    <div className="bannerHeader">Our Partners</div>
    <Marquee className="marquee">
        <div className="bannerItem">University Of Calgary</div>
        <div className="bannerItem">Sir Winston Churchill High School</div>
        <div className="bannerItem">Tom Baines Junior High</div>
        <div className="bannerItem">Robert Thirsk High School</div>
        <div className="bannerItem">Western Canada High School</div>
        <div className="bannerItem">Calgary Public Library</div>
    </Marquee>
    </div>

}

export default Banner