import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Tour from "./components/TourDates";
import AlbumCard from "./components/AlbumCards";
import Discography from "./components/Discography";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/Container";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

// =======================================================
// CREATING THE MAIN COMPONENT 
export default function App() {

  const albums = Discography()

  // THIS STAYS HERE 
  function Albums({ albums }) {
    const match = useRouteMatch();
    const findAlbumCardById = (id) =>
      // looking at each album and if the id of the current album we are looking at is the same as the one that is passed in it will return the 1st element[0]
      albums.filter((AlbumCard) => AlbumCard.id == id)[0];

    return (
      <div>
        <h2>Discography</h2>
        <h4>Click each album to get more info and to add a review</h4>
        <ul>
          {/* RETURNING A LINK FOR EACH ALBUM */}
          {albums.map((AlbumCard, index) => {
            return (
              <Alert key={index} variant="light">
                <Link to={`${match.url}/${AlbumCard.id}`}>
                  {/* Creating the link for the album we are looking at */}
                  {AlbumCard.title}
                </Link>
              </Alert>
            );
          })}
        </ul>
        <Switch>
          <Route
            path={`${match.path}/:AlbumCardId`}
            render={(props) => (
              <AlbumCard
                {...props}
                data={findAlbumCardById(props.match.params.AlbumCardId)}
              />
            )}
          />
          {/* ADDING A DEFAULT for when you click on post what you will see at first if nothing is selected */}
          <Route path={match.path}>
            <h3> Select an album to learn about and place a review</h3>
          </Route>
        </Switch>
      </div>
    );
  }

  // This is our router component
  return (
    <Container fluid="sm">
      <Router>
        <div className="Nav">
          <Header text="Music Non Stop" />
        </div>
        <div>
          <ButtonGroup className="buttons">
            <Button variant="dark">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="dark">
              <Link to="/About">The Band</Link>
            </Button>
            <Button variant="dark">
              <Link to="/Albums">Discography </Link>
            </Button>
            <Button variant="dark">
              <Link to="/Tour">Tour Dates</Link>
            </Button>
          </ButtonGroup>

          <Switch>
            <Route path='/Albums'>
              <Albums albums={albums} />
            </Route>
            <Route path='/About'>
              {/* < About /> */}
              {/* I COULD NOT FIGURE OUT HOW TO REMOVE THIS HARD CODED CODE BELOW AND MOVE IT TO THE ABOUT.JS file */}
              <About members={[
                <h2>Who is Kraftwerk? </h2>,
                <p>Kraftwerk's radical and prophetic approach to purely electronic pop music has been referenced by an extraordinary number of artists from the mid-'70s onward. The Düsseldorf pioneers' self-described "robot pop" -- hypnotically minimal and obliquely rhythmic, and presented since the late '70s as the work of automatons -- has resonated in virtually every development of contemporary pop since the late 20th century, including David Bowie's Berlin trilogy, synth pop, and Neue Deutsche Welle, as well as later U.S. developments such as electro, techno, and house. Kraftwerk's enduring influence, particularly through '70s albums such as the unlikely cross-continental hit Autobahn, Trans-Europe Express, and The Man-Machine, and 1981's Computer World, cannot be overstated. Although new material has been in short supply since the group's second decade of activity, they've continued to enhance their legacy with innovative live performances and several catalog projects.</p>,
                'Ralph Hütter - (born 20 August 1946) is a German musician and composer best known as the lead singer and keyboardist of Kraftwerk, which he founded with Florian Schneider in 1969.',
                'Fritz Hilpert - Before becoming associated with Kraftwerk in 1989 Fritz worked as freelance sound engineer with several German acts as the new wave-band Din A Testbild.',
                'Henning Schmitz -  From 1978 he began working with Kraftwerk as a sound engineer, was first credited on the sleeve of the 1986 album Electric Café and later replaced short term member Fernando Abrantes in concerts from 1991 onwards',
                'Falk Grieffenhanen - Joining the band in 2012 as the live video operator, he replaced Stefan Pfaffe.']} />
            </Route>
            <Route path='/Tour'>
              <Tour />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </Container>
  );
};