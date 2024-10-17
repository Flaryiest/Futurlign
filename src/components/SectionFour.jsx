import "/src/style/sectionFour.css"
import FaqBox from "./FaqBox"
import { Fade } from "react-awesome-reveal";
function SectionFour() {
    return <div className="sectionFour">
        <div className="sectionFourContent">
            <Fade><h2 className="sectionFourHeader">Support Us</h2></Fade>
            <div className="FaqContainer">
                <div className="sectionFourMainText">As a registered Canadian non-profit, we rely on your support in our pursuit of our mission. If you would like to help fund us and donate, please reach out to us at <a className="aqua bold" href="mailto: info.futurlign@gmail.com">info.futurlign@gmail.com</a>. We truly value any and all donations that we receive.</div>
            </div>
        </div>
    
    </div>
}

export default SectionFour