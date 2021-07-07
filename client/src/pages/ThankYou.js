//import React, { useState, useEffect } from "react";
import { makeChart, getVotes } from "../utils/chartapi";
import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Row,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import { Link } from "react-router-dom";
//global state imports
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_SEARCHED_RESTAURANTS } from "../utils/actions";
import { QUERY_RESTAURANTS } from "../utils/queries";
import { searchYelp } from "../utils/yelpAPI";

import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import {
  saveRestaurantIds,
  getSavedRestaurantIds,
} from "../utils/localStorage";
import { SAVE_RESTAURANT } from "../utils/mutations";
import "./style.css";
import VoteChart from "../components/Chart";
import { propTypes } from "react-bootstrap/esm/Image";

const ThankYou = () => {
  const [state, dispatch] = useStoreContext();
  const { currentRestaurants, eventTitle, eventNote } = state;
  /* 
  const handleVote = async (event) => {
    const index = event.target.getAttribute("value");
    console.log(event.target.getAttribute("value"));
    //

    const data = { restaurant: choice };
    //const data = choice;
    console.log(data);

    const { votes, totalVotes, votesCounts } = await getVotes(voteData);

    let dataPoints = [
      { y: votesCounts.Maskadores, label: "Maskadores" },
      { y: votesCounts.MunichGyro, label: "MunichGyro" },
      { y: votesCounts.Starbucks, label: "Starbucks" },
      { y: votesCounts.Other, label: "Other" },
    ];
    //chart, passing dataPoints and totalVotes
  };
 */
  return (
    <>
      <div id="homephoto">
        <div id="eventdiv">
          <div id="event">
            <h1 id="eventheader" style={{ color: "#212529" }}>
              Thank you for voting!
            </h1>{" "}
            <br />
            {/* <h3>Pre-game dinner</h3> */}
            <h3></h3>
            <h5></h5>
            <div id="buttons">
              <Link to="/">
                <Button
                  // onSubmit={handleVote}
                  type="submit"
                  variant="success"
                  size="lg"
                >
                  Make your own TasteBuds poll
                </Button>
              </Link>
            </div>
            {/* <VoteChart eventTitle={eventTitle} /> */}
            {/*   <div id="form">
              <form id="vote-form">
                <h5>
                  <input
                    type="radio"
                    name="restaurant"
                    id="maskadores"
                    value="Maskadores"
                  />
                  <label htmlFor="maskadores"> Maskadores</label>
                </h5>
                <h5>
                  <input
                    type="radio"
                    name="restaurant"
                    id="munichgyro"
                    value="MunichGyro"
                  />
                  <label htmlFor="munichgyro"> MunichGyro</label>
                </h5>
                <h5>
                  <input
                    type="radio"
                    name="restaurant"
                    id="starbucks"
                    value="Starbucks"
                  />
                  <label htmlFor="starbucks"> Starbucks</label>
                </h5>
                <h5>
                  <input
                    type="radio"
                    name="restaurant"
                    id="other"
                    value="Other"
                  />
                  <label htmlFor="other"> Other</label>
                </h5> */}
            {/* </form>
              <br /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
