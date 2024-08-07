import NavBar from "/src/components/Navbar.jsx"
import Footer from "/src/components/Footer.jsx"
import "/src/style/events.css"
function Events() {
    return <div className="events">
        <NavBar/>
        <div className="eventsContent">
            <h2 className="eventsHeader">Futurlign Aligns</h2>
            <div className="eventsImages">
                <img src="/src/assets/EventsImageOne" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                <img src="/src/assets/EventsImageTwo" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                <img src="/src/assets/EventsImageThree" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                <img src="/src/assets/EventsImageFour" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                <img src="/src/assets/EventsImageFive" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                <img src="/src/assets/EventsImageSix" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                <img src="/src/assets/EventsImageSeven" className="eventImage" alt="Image of Children Learning How AI Works"></img>
                <img src="/src/assets/EventsImageEight" className="eventImage" alt="Image of Children Learning How AI Works"></img>
            </div>
            <div className="eventsSection">
                <h2 className="eventsHeader">Upcoming Events</h2>
                <div className="eventsText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis in magni ab voluptates eligendi quia atque voluptatum ullam harum laboriosam deleniti, illum quos omnis explicabo facere ratione nostrum? Mollitia.</div>
            </div>
            <div className="eventsSection">
                <h2 className="eventsHeader">Upcoming Events</h2>
                <div className="eventsText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis in magni ab voluptates eligendi quia atque voluptatum ullam harum laboriosam deleniti, illum quos omnis explicabo facere ratione nostrum? Mollitia.</div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Events