import React, { useEffect } from "react";
import { useState, UseEffect } from "react";
import axios from "axios";
import Airline from "./Airline";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;

const Subheader = styled.div`
  font-weight: 500;
  font-size: 26px;
  text-decoration: italics;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width 100%;
  padding: 20px;
`;

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    // Get the iems or brands to be rated
    // Update the brand state
    axios
      .get("/api/v1/items")
      .then((resp) => {
        setAirlines(resp.data);
        console.log(resp.data);
      })
      .catch((resp) => console.log(resp));
  }, [airlines.length]);

  const grid = airlines.map((item) => {
    return <Airline key={item.id} attribute={item} />;
  });

  return (
    <Home>
      <Header>
        <h1>Brand Review</h1>
        <Subheader>
          Providing an unbiased review to help you make the best choice
        </Subheader>
      </Header>

      <Grid>{grid}</Grid>
    </Home>
  );
};

export default Airlines;
