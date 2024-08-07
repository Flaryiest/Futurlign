import "/src/style/signUpForm.css"
import axios from "axios"
import NavBar from "../Navbar"
import Footer from "../Footer"
import SkillSelector from "./SkillSelector"
function SignUpForm() {
    return <div className="signUpForm">
        <NavBar/>
        <div className="signUpFormContent">
            <h2 className="signUpHeader">Sign Up</h2>
            <form>
                <div className="signUpFormSection">
                    <div className="signUpFormSectionDivider">
                        <label htmlFor="fullName" className="formTextLabel">Full Name</label>
                        <input className="formTextInput" name="fullName" id="fullName" type="text"></input>
                    </div>
                    <div className="signUpFormSectionDivider">
                        <label htmlFor="email" className="formTextLabel">Email</label>
                        <input className="formTextInput" name="email" id="email" type="text"></input>
                    </div>
                </div>
                <div className="signUpFormSection">
                    <div className="signUpFormSectionDivider">
                        <label htmlFor="grade" className="formTextLabel">Grade</label>
                        <input className="formTextInput" name="grade" id="grade" type="text"></input>
                    </div>
                    <div className="signUpFormSectionDivider">
                        <label htmlFor="school" className="formTextLabel">School</label>
                        <input className="formTextInput" name="school" id="school" type="text"></input>
                    </div>
                </div>
                <div className="signUpFormSectionSkills">
                    <div className="sectionSkillsHeader">Please rank your proficiency of these skills from 1 (lowest) to 5 (highest) </div>
                    <SkillSelector skill="Outreach and Communication"></SkillSelector>
                    <SkillSelector skill="Graphic Design"></SkillSelector>
                    <SkillSelector skill="Coding"></SkillSelector>
                    <SkillSelector skill="AI Knowledge"></SkillSelector>
                    <SkillSelector skill="Coordination and Logistics"></SkillSelector>
                    <SkillSelector skill="Public Speaking"></SkillSelector>
                </div>
                <button className="signUpFormButton" type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
    </div>

}

export default SignUpForm

