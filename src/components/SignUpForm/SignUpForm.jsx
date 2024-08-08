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
                <div class="card">
                    <div>
                    <label class="input">
                        <input class="input__field" type="text" name="fullName" placeholder=" " />
                        <span class="input__label">Full Name</span>
                    </label>
                    <div class="divider"></div>
                    <label class="input">
                        <input class="input__field" type="text" name="school" placeholder=" " />
                        <span class="input__label">School</span>
                    </label>

                    </div>
                    <div>
                    <label class="input">
                        <input class="input__field" type="text" name="email" placeholder=" " />
                        <span class="input__label">Email</span>
                    </label>
                    <div class="divider"></div>
                    <label class="input">
                        <input class="input__field" type="text" name="grade" placeholder=" " />
                        <span class="input__label">Grade</span>
                    </label>
                    </div>
                </div>
                <div class="button-group">
                    <button class="button">Submit</button>
                </div>
            </form>
        </div>
        <Footer/>
    </div>

}

export default SignUpForm

