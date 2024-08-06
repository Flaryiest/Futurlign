import "/src/style/faqBox.css"
import {useState} from "react"
function FaqBox({header, content}) {
    const [isActive, setIsActive] = useState(false)
    if (!(isActive)) {
        return <div className="FaqClosed">
            <button className="FaqHeader" onClick={() => {setIsActive(true)}}>
                <h3 className="FaqTitle">{header}</h3>
            </button>
        </div>
    }
    if (isActive) {
    return <div className="FaqOpen">
            <button className="FaqHeader" onClick={() => {setIsActive(false)}}>
                <h3 className="FaqTitle">{header}</h3>
            </button>
            <div className="FaqText">{content}</div>
    </div>
    }
}

export default FaqBox