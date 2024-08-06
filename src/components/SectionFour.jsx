import "/src/style/sectionFour.css"
import FaqBox from "./FaqBox"
function SectionFour() {
    return <div className="sectionFour">
        <div className="sectionFourContent">
            <h2 className="sectionFourHeader">FAQ</h2>
            <div className="FaqRow">
                <FaqBox header="What Is The Mission Of This Organization?" content="The mission of our organization Futurlign Is to help spread awareness about the potential downsides of AI."></FaqBox>
                <FaqBox header="How Can I Get Involved?" content="If you would like join us, please call us at 403-145-3123"></FaqBox>
            </div>
        </div>
    
    </div>
}

export default SectionFour