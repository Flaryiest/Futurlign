import "/src/style/sectionOne.css"
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
function sectionOne() {
    return <>
    <div className="sectionOne">
        <div className="sectionOneContent">
            <Fade><h1 className="sectionOneHeader">Aligning The <span className="aqua">Future Together.</span></h1></Fade>
            <div className="sectionOneText">Founded by passionate individuals with diverse backgrounds, our organization strives to promote understanding and awareness of AI’s potential impact on our lives. </div>
            <Link to="/info" className="sectionOneButton">
                <div>About</div>
            </Link>
            <div className="glowOne"></div>
            <img className="sectionOneImage" src="/src/assets/SectionOneAIImage.webp"></img>
            <div className="glowTwo"></div>
            <div className="glowThree"></div>
        </div>
    </div>
    </>
}

export default sectionOne