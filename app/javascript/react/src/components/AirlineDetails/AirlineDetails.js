import React from "react";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Column = styled.div`
  background: #fff;
  height: 100vh;
  // overflow: scroll;

  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

const AirlineDetails = () => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    const url = `/api/v1/items/${slug}`;

    axios
      .get(url)
      .then((resp) => {
        setAirline(resp.data);
        setDataLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name);

    // setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));

    [...review, e.target.value];
    console.log("review", review);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const item_id = airline.id;
    // axios
    //   .post("/api/v1/reviews", { review, airline_id })
    //   .then((resp) => {
    //     debugger;
    //   })
    //   .catch((resp) => {});
  };

  return (
    <Wrapper>
      {dataLoaded && (
        <Fragment>
          <Column>
            <Main>
              <Header attributes={airline} />
              <div className="reviews"></div>
            </Main>
          </Column>

          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={airline}
              // review={review}
            />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};

export default AirlineDetails;
