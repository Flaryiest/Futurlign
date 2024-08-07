import "/src/style/signUpForm.css"
import axios from "axios"
import NavBar from "../Navbar"
import Footer from "../Footer"
import SkillSelector from "./SkillSelector"
function SignUpForm() {
    return <div className="signUpForm">
        <NavBar/>
        <div className="signUpFormContent">
            <form>
                <div className="signUpFormSection">
                    <label for="fullName" className="formTextLabel">Full Name</label>
                    <input className="formTextInput" name="fullName" id="fullName" type="text"></input>
                    <label for="email" className="formTextLabel">Email</label>
                    <input className="formTextInput" name="email" id="email" type="text"></input>
                </div>
                <div className="signUpFormSection">
                    <label for="grade" className="formTextLabel">Grade</label>
                    <input className="formTextInput" name="grade" id="grade" type="text"></input>
                    <label for="school" className="formTextLabel">School</label>
                    <input className="formTextInput" name="school" id="school" type="text"></input>
                </div>
                <div className="signUpFormSection">
                    <SkillSelector skill="Outreach and Communication"></SkillSelector>
                    <SkillSelector skill="Graphic Design"></SkillSelector>
                    <SkillSelector skill="Coding"></SkillSelector>
                    <SkillSelector skill="AI Knowledge"></SkillSelector>
                    <SkillSelector skill="Coordination and Logistics"></SkillSelector>
                    <SkillSelector skill="Public Speaking"></SkillSelector>
                </div>
            </form>
        </div>
        <Footer/>
    </div>

}

export default SignUpForm

