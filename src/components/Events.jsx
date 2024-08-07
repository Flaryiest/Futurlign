import NavBar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import "/src/style/events.css"
function Events() {
    return <div className="events">
        <NavBar/>
        <div className="eventsContent">
            <h2 className="eventsHeader">Futurlign Aligns</h2>
            <div className="eventsImages">
                <div className="eventsImageRow">
                    <img src="/src/assets/EventsImageOne.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                    <img src="/src/assets/EventsImageTwo.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                </div>
                <div className="eventsImageRow">
                    <img src="/src/assets/EventsImageThree.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                    <img src="/src/assets/EventsImageFour.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                </div>
                <div className="eventsImageRow">
                    <img src="/src/assets/EventsImageFive.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                    <img src="/src/assets/EventsImageSix.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                </div>
                <div className="eventsImageRow">
                    <img src="/src/assets/EventsImageSeven.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                    <img src="/src/assets/EventsImageEight.webp" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                </div>
            </div>
            <div className="eventsSection">
                <h2 className="eventsHeader">Upcoming Events</h2>
                <div className="eventsText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis in magni ab voluptates eligendi quia atque voluptatum ullam harum laboriosam deleniti, illum quos omnis explicabo facere ratione nostrum? Mollitia.</div>
            </div>
            <div className="eventsSection">
                <h2 className="eventsHeader">Past Events</h2>
                <div className="eventsText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis in magni ab voluptates eligendi quia atque voluptatum ullam harum laboriosam deleniti, illum quos omnis explicabo facere ratione nostrum? Mollitia.</div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Events