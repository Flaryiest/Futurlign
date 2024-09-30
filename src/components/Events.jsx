import NavBar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import ScrollToTop from './ScrollToTop'
import { Fade } from "react-awesome-reveal";
import "/src/style/events.css"
function Events() {
    return <div className="events">
        <ScrollToTop/>
        <NavBar/>
        <div className="eventsContent">
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
                <div className="eventsText">Check back in the near future! We will have new events around the start of october.</div>
            </div>
            <div className="eventsSection">
                <Fade><h2 className="eventsHeader">Past Events</h2></Fade>
                <div className="eventsText">Our AI workshops and coding classes have successfully educated over 100 children, igniting their interest in technology and innovation. Participants explored foundational concepts of artificial intelligence, learning how AI systems operate and the principles behind machine learning. Through hands-on experience with Python coding and TensorFlow, students gained practical skills in building their own AI models and applications. By fostering a collaborative environment, we empowered young learners to experiment and innovate, equipping them with the knowledge and confidence to pursue further education in tech.</div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Events