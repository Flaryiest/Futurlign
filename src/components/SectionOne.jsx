import "/src/style/sectionOne.css"

function sectionOne() {
    return <>
    <div className="sectionOne">
        <div className="sectionOneContent">
            <h1 className="sectionOneHeader">Aligning The <span className="aqua">Future Together.</span></h1>
            <div className="sectionOneText">Founded by passionate individuals with diverse backgrounds, our organization strives to promote understanding and awareness of AI’s potential impact on our lives. </div>
            <a className="sectionOneButton">
                <div>About</div>
            </a>
            <div className="glowOne"></div>
            <img className="sectionOneImage" src="/src/assets/SectionOneAIImage.webp"></img>
            <div className="glowTwo"></div>
        </div>
    </div>
    </>
}

export default sectionOne