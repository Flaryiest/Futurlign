function SkillSelector({skill}) {
    return (
        <div className="signUpFormSelector">
            <div className="skillHeader">{skill}</div>
            <div className="skillRow">
                <input type="radio" id={skill + "1"} name={skill} value="1" />
                <input type="radio" id={skill + "2"} name={skill} value="2" />
                <input type="radio" id={skill + "3"} name={skill} value="3" />
                <input type="radio" id={skill + "4"} name={skill} value="4" />
                <input type="radio" id={skill + "5"} name={skill} value="5" />
            </div>
        </div>
    );
}
export default SkillSelector