function SkillSelector({skill}) {
    return <div className="signUpFormSection">
        <div className="skillHeader">{skill}</div>
        <input type="radio" id={skill + "1"}  name={skill} value="1"/>
        <label for={skill + "1"}>1</label>
        <input type="radio" id={skill + "2"}  name={skill} value="2"/>
        <label for={skill + "2"}>2</label>
        <input type="radio" id={skill + "1"}  name={skill} value="3"/>
        <label for={skill + "3"}>3</label>
        <input type="radio" id={skill + "1"}  name={skill} value="4"/>
        <label for={skill + "4"}>4</label>
        <input type="radio" id={skill + "1"}  name={skill} value="5"/>
        <label for={skill + "5"}>5</label>
    </div>
}

export default SkillSelector