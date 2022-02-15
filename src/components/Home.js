import React from "react";
import { Carousel } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

function Home() {
    return <div>
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/RqEmPJAYNL0/maxresdefault.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.electronicbeats.net/app/uploads/2017/04/Kraftwerk-3d-live.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jambase.com/wp-content/uploads/2015/10/kraftwerk-boston-Andrew-Bruss-Crop.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

        <div className="accordion">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header >Fun Facts (Click Here)</Accordion.Header>
                    <Accordion.Body>
                        Two former Kraftwerk members formed NEU!. Their 1974 album “Autobahn” hit #5 on the US Billboard Top 200 chart. “Autobahn” is said to be Vertigo Records’ only international hit. Kraftwerk spent three years desiging their mobile setup for the “Computer World” tour. They declined touring with David Bowie. “Pocket Calculator” was recorded in five different languages.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>The Kraftwerk Influence (Click Here)</Accordion.Header>
                    <Accordion.Body>
                        Kraftwerk’s influence can be heard in the work of David Bowie and Brian Eno, the synth-pop of Depeche Mode, the electronic-rock integration of U2, the “robot rock” of Daft Punk, the production techniques of Kanye West, and in countless EDM and dubstep artists. Kraftwerk are entirely unique – they have produced Number One chart success with their song “The Model,” and were invited to perform for a series of multi-media 3-D performances of their catalogue albums 12345678 at the Museum of Modern Art NYC and the Tate Modern London with their famous robots in recognition of their contributions to avant-garde art. Kraftwerk have been, and will always be, “Music Non-Stop.”
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
};

export default Home;
