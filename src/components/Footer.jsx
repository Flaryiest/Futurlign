import "/src/style/footer.css"

function Footer() {
    return <div className="footer">
        <div className="footerContent">
            <div className="footerLeft">
                <div className="footerHeader">Futurlign</div>
                <div className="footerContentSmall">A youth-led non-profit organization aiming to raise awareness around AI.</div>
            </div>
            <div className="footerMiddle">
                <div className="footerHeader">Connect With Us</div>
                <div className="footerContentSmall">Check out our instagram <a class="link" href="https://www.instagram.com/futurlign/">here</a>.</div>
            </div>
            <div className="footerRight">
                <div className="footerHeader"></div>
                <div className="footerContentSmall">Web Design & Development By ericmzuo1@gmail.com</div>
            </div>
        </div>
        <div className="fade marginBottom"></div>
    </div>
}

export default Footer