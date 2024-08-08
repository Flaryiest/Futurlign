
import axios from "axios"
import NavBar from "../Navbar"
import Footer from "../Footer"
import ScrollToTop from "../ScrollToTop"
import { useForm } from "react-hook-form"
import "/src/style/signUpForm.css"
function SignUpForm() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return <div className="signUpForm">
        <ScrollToTop/>
        <NavBar/>
        <div className="signUpFormContent">
            <h2 className="signUpHeader">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card">
                    <div>
                        <label className="input">
                            <input className="input__field" type="text" name="fullName" placeholder=" " {...register("fullName", { required: true })}/>
                            <span className="input__label">Full Name</span>
                        </label>
                        <div className="divider"></div>
                        <label className="input">
                            <input className="input__field" type="text" name="school" placeholder=" " {...register("school", { required: true })}/>
                            <span className="input__label">School</span>
                        </label>
                    </div>
                    <div>
                    <label className="input">
                        <input className="input__field" type="text" name="email" placeholder=" " {...register("email", { required: true })}/>
                        <span className="input__label">Email</span>
                    </label>
                    <div className="divider"></div>
                    <label className="input">
                        <input className="input__field" type="text" name="grade" placeholder=" " {...register("grade", { required: true })}/>
                        <span className="input__label">Grade</span>
                    </label>
                    </div>
                    
                </div>
                <div className="button-group">
                    <button className="button">Submit</button>
                </div>
            </form>
        </div>
        <Footer/>
    </div>

}

export default SignUpForm

