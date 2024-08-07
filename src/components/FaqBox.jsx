import "/src/style/faqBox.css"
import {useState} from "react"
function FaqBox({header, content}) {
    const [isActive, setIsActive] = useState(true)
    if (!(isActive)) {
        return <div className="FaqClosed">
            <button className="FaqHeader" onClick={() => {setIsActive(true)}}>
                <div className="FaqTitle">{header}</div>
            </button>
        </div>
    }
    if (isActive) {
    return <div className="FaqOpen">
            <button className="FaqHeader" onClick={() => {setIsActive(false)}}>
                <div className="FaqTitle">{header}</div>
            </button>
            <div className="FaqText">{content}</div>
    </div>
    }
}

export default FaqBox