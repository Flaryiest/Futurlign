import NavBar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import "/src/style/info.css"

function Info() {
    return <div className="info">
        <NavBar/>
        <div className="infoTemp">
            <div className="infoContent">
                <div className="infoSection">
                    <div className="infoSectionHeader"><span className="purple">Core Principles:</span></div>
                    <ul className="infoSectionList">
                        <li className="infoSectionListItem">Lorem, ipsum dolor sit amet consectetur</li>
                        <li className="infoSectionListItem">Lorem, ipsum dolor sit amet consectetur</li>
                        <li className="infoSectionListItem">Lorem, ipsum dolor sit amet consectetur</li>
                    </ul>
                </div>
                <div className="infoSection">
                    <div className="infoSectionHeader">Motivation</div>
                    <div className="infoSectionText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veritatis ab eligendi placeat qui, ipsam unde fuga, reiciendis ducimus iusto quia. Porro, laborum molestiae. Ratione, reprehenderit quos. Praesentium, cupiditate adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut ipsam corrupti neque quas, obcaecati repudiandae magni tempore sint doloribus, esse quidem eos! Doloribus, fugit. Enim blanditiis soluta perspiciatis quis?</div>
                </div>
                <div className="infoSection">
                    <div className="infoSectionHeader">What</div>
                    <div className="infoSectionText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veritatis ab eligendi placeat qui, ipsam unde fuga, reiciendis ducimus iusto quia. Porro, laborum molestiae. Ratione, reprehenderit quos. Praesentium, cupiditate adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam culpa dolore aperiam saepe deleniti officia quaerat veritatis at quia repellat adipisci, ullam, molestias ipsa voluptas cum tempora iste odio!</div>
                </div>
                <div className="infoSection">
                    <div className="infoSectionHeader">Who</div>
                    <div className="infoSectionText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veritatis ab eligendi placeat qui, ipsam unde fuga, reiciendis ducimus iusto quia. Porro, laborum molestiae. Ratione, reprehenderit quos. Praesentium, cupiditate adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum repellendus ratione explicabo ducimus perferendis sit. Nihil distinctio voluptas ut tenetur pariatur, earum repellat odio dignissimos quae molestias eos repudiandae?</div>
                </div>
            </div>    
        </div>
        <div className="glowInfoOne"></div>
        <div className="glowInfoTwo"></div>
        <Footer/>
    </div>
}

export default Info