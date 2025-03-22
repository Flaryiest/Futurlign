import NavBar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import ScrollToTop from './ScrollToTop'
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "/src/style/events.css"
import "/src/style/App.css"
function Events() {
    return <div className="events">
        <ScrollToTop/>
        <NavBar/>
        <div className="eventsContent">
            <div className="events-section">
                <Fade><h3 className="eventsHeader">UCalgary Course Signup</h3></Fade>
                <Fade><h4 className="events-sub-header">Registration is Open.</h4></Fade>
                <Link to="/register" className="section-one-button">Click to Sign Up</Link>
                <p className="events-info-text">Register for our 2025 Spring AI Coding Course at the University of Calgary. Classes will be held every Wednesday (March 12 - April 16), see below poster.</p>
                <img src="/assets/springCourse.webp" className="events-poster" alt="Spring Course Poster"></img>
            </div>

            <Fade><h2 className="eventsHeader">Futurlign Aligns</h2></Fade>
            <div className="eventsImages">
                <div className="eventsImageRow">
                    <img src="/assets/EventsImageOne.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                    <img src="/assets/EventsImageTwo.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                </div>
                <div className="eventsImageRow">
                    <img src="/assets/EventsImageThree.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                    <img src="/assets/EventsImageFour.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                </div>
                <div className="eventsImageRow">
                    <img src="/assets/EventsImageFive.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                    <img src="/assets/EventsImageSix.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                </div>
                <div className="eventsImageRow">
                    <img src="/assets/EventsImageSeven.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                    <img src="/assets/EventsImageEight.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                </div>
            </div>
            <div className="eventsSection">
                <Fade><h2 className="eventsHeader">Upcoming Events</h2></Fade>
                <div className="eventsText">Check back in the near future! Futurlign has scheduled the WildRose Hacks youth coding competition for April-May 2025.</div>
            </div>
            <div className="eventsSection">
                <Fade><h2 className="eventsHeader">Past Events</h2></Fade>
                <div className="eventsText">Our 2024 AI workshops and coding classes have seen over 100 Calgary-area junior high youth successfully complete courses at the University of Calgary and Calgary Public Library, igniting their interest in technology and innovation. Participants explored foundational concepts of artificial intelligence, learning how AI systems operate and the principles behind machine learning. Through hands-on experience with Python coding and TensorFlow, students gained practical skills in building their own AI models and applications. AI Ethics, Responsible and Sustainable Usage, and Alignment were also covered to great importance.</div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Events