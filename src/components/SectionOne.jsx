import "/src/style/sectionOne.css"
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
function sectionOne() {
    return <>
    <div className="sectionOne">
        <div className="sectionOneContent">
            <Fade>
                <div className="sectionOneSubHeader">
                    <span className="sectionOneSubHeaderOne">Artificial Intelligence is changing the world.</span>
                    <span className="sectionOneSubHeaderTwo">Artificial Intelligence will continue changing the world.</span>
                </div>
                <h1 className="sectionOneHeader"><span className="aqua">Our mission is to ensure this change benefits everyone.</span></h1>
            </Fade>
            <div className="sectionOneText">Founded by passionate individuals with diverse backgrounds, we are a registered Canadian non-profit organization striving to promote understanding and awareness of AI’s potential impact on our lives. </div>
            <Link to="/info" className="sectionOneButton">
                <div>About</div>
            </Link>
            <div className="glowOne"></div>
            <img className="sectionOneImage" src="/assets/SectionOneAIImage.webp"></img>
            <div className="glowTwo"></div>
            <div className="glowThree"></div>
        </div>
    </div>
    </>
}

export default sectionOne