import "/src/style/sectionTwo.css"
import { Fade } from "react-awesome-reveal";
function SectionTwo() {
    return <>
    <div className="sectionTwo">
        <div className="sectionTwoContent">
            <Fade><h2 className="sectionTwoHeader">What We Hope To Accomplish</h2></Fade>
            <div className="sectionTwoRowContainer">
                <div className="sectionTwoRow">
                    <div className="sectionTwoStatement sectionTwoStatementSmall">
                        <div className="sectionTwoStatementHeader">Support</div>
                        <div className="sectionTwoStatementText">We aim to build a global community where individuals, regardless of background, can access resources to learn about AI, alignment, and coding. By providing mentorship and guidance, we empower youth to explore these fields and create impactful solutions.</div>
                    </div>
                    <div className="sectionTwoStatement sectionTwoStatementLarge">
                        <div className="sectionTwoStatementHeader">Education</div>
                        <div className="sectionTwoStatementText">Our goal is to make AI, alignment, and coding education accessible to everyone, no matter their age or background. By offering workshops, tutorials, and practical projects, we aim to equip people with the skills and knowledge needed to engage with and shape the future of technology. We hope to inspire curiosity and a deeper understanding of AI’s potential to positively impact the world.</div>
                    </div>
                </div>
                <div className="sectionTwoRow">
                    <div className="sectionTwoStatement sectionTwoStatementLarge">
                        <div className="sectionTwoStatementHeader">Alignment</div>
                        <div className="sectionTwoStatementText">We are committed to advancing education on AI alignment, emphasizing the importance of developing AI systems that are aligned with human values and promote safety. Through fostering a deeper understanding of the ethical considerations surrounding AI, we seek to encourage responsible and informed innovation. Our objective is to equip future leaders with the expertise necessary to ensure that AI technologies serve the broader interests of society.</div>
                    </div>
                    <div className="sectionTwoStatement sectionTwoStatementSmall">
                        <div className="sectionTwoStatementHeader">Innovation</div>
                        <div className="sectionTwoStatementText">At Futurlign, we drive innovation by equipping individuals with the tools and resources needed to explore new ideas in AI and coding. By emphasizing experimentation and critical thinking, we inspire the next generation to create transformative innovations that address pressing global challenges.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default SectionTwo