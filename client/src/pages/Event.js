//import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import { Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//global state imports
import { useStoreContext } from "../utils/GlobalState";
import { ADD_EVENT } from "../utils/mutations";
import { useQuery, useMutation, error } from "@apollo/client";
//import { SAVE_EVENT } from "../utils/mutations";
import "./style.css";

const Event = () => {
  const [state, dispatch] = useStoreContext();
  const { currentRestaurants } = state;

  // create state for holding our search field data
  const [eventNameInput, setEventNameInput] = useState("");
  const [eventNotesInput, setEventNotesInput] = useState("");
  const [addEvent, { error }] = useMutation(ADD_EVENT);

  const handleAddEvent = async (event) => {
    const title = eventNameInput;
    const note = eventNotesInput;
    const restaurants = currentRestaurants;

    //event.preventDefault();
    console.log(eventNameInput);
    if (!eventNameInput) {
      //add modal
      console.log("please enter a name for your event");
      return false;
    }
    try {
      console.log(title, note, restaurants);
      await addEvent({
        variables: {
          title: title,
          note: note,
          restaurants: restaurants,
        },
      });
      console.log(event);
      //setSavedEvents...
    } catch (err) {
      console.error(err);
    }
    //global state
    const saveEventNotes = (eventNotesInput) => {
      dispatch({
        type: "UPDATE_EVENT_NOTES",
        eventNote: eventNotesInput,
      });
    };
    saveEventNotes(eventNotesInput);

    const saveEventTitle = (eventNameInput) => {
      dispatch({
        type: "UPDATE_EVENT_TITLE",
        eventTitle: eventNameInput,
      });
    };
    //
    saveEventTitle(eventNameInput);
    console.log(state);
    //setEventNameInput("");
    //setEventNotesInput("");
  };

  return (
    <>
      <div>
        <header>
          <div id="homephoto">
            <div id="eventdiv">
              <div id="event">
                <h1 id="eventheader" style={{ color: "#212529" }}>
                  Create your Event
                </h1>
                <br />
                <h5>
                  Add details about your event.
                  <br />
                  Then invite your friends to help choose the restaurant!
                </h5>

                <div id="form">
                  <Form>
                    <Form.Row>
                      <Col xs={12} md={8}>
                        <Form.Control
                          name="eventNameInput"
                          value={eventNameInput}
                          onChange={(e) => setEventNameInput(e.target.value)}
                          type="text"
                          size="lg"
                          placeholder="Give your event a name"
                        />
                        <br />
                        <Form.Control
                          name="eventNotesInput"
                          value={eventNotesInput}
                          onChange={(e) => setEventNotesInput(e.target.value)}
                          type="text"
                          size="lg"
                          id="longanswer"
                          style={{ textAlign: "left" }}
                          placeholder="Add a note to your friends"
                        />
                        <br />
                      </Col>
                      <Col xs={12} md={4}>
                        <Link to="/viewevent">
                          <Button
                            id="invitebutton"
                            onClick={handleAddEvent}
                            type="submit"
                            variant="success"
                            size="lg"
                          >
                            Invite your friends
                          </Button>
                        </Link>
                      </Col>
                    </Form.Row>
                  </Form>
                  <div id="restaurantCards">
                    {currentRestaurants.map((restaurant) => {
                      return (
                        <Card key={restaurant.id} style={{ width: "35rem" }}>
                          <Card.Img
                            variant="left"
                            width={"250"}
                            height={"250"}
                            src={restaurant.image_url}
                          />
                          <Card.Body>
                            <Card.Title>{restaurant.name}</Card.Title>
                            <Card.Text>
                              Rating: {restaurant.rating} <br />
                              Price: {restaurant.price} <br />
                              {restaurant.location}, {restaurant.city} <br />
                              {restaurant.phone} <br />
                              <a href={restaurant.url}>Website</a>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <Container id="restaurantCards">
        <Row>
          <Col style={{ alignItems: "center" }}>
            {searchedRestaurants.map((restaurant) => {
              return (
                <Card key={restaurant.id} style={{ width: "35rem" }}>
                  <Card.Img
                    variant="left"
                    width={"250"}
                    height={"250"}
                    src={restaurant.image_url}
                  />
                  <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>
                      Rating: {restaurant.rating} <br />
                      Price: {restaurant.price} <br />
                      {restaurant.location}, {restaurant.city} <br />
                      {restaurant.phone} <br />
                      <a href={restaurant.url}>Website</a>
                    </Card.Text>
                    <Button variant="primary">Add to event</Button>
                  </Card.Body>
                </Card> 
                
              );
            })}
          </Col>
        </Row>
      </Container>*/}
    </>
  );
};

export default Event;
