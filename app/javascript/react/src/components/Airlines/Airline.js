import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const Airline = (props) => {
  const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    width: auto;
    height: 100%;
    padding: 10px 0;
  `;

  const AirlineLogo = styled.div`
    width: 50px;

    img {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      border: 1px solid #efefef;
      text-align: center;
      padding-top: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  `;
  const AirlineName = styled.div`
    padding: 20px 0 10px 0;
  `;
  const LinkWrap = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color #fff;
    background: black;
    border-radius: 4px;
    padding: 10px 50px;
    // border: 1px solid black;
    width: 100%;
    text-decoration:none;
  }
  `;

  console.log(props.attribute);
  return (
    <Card>
      <AirlineLogo>
        {" "}
        <img src={props.attribute.image_url} alt={props.attribute.name} />{" "}
      </AirlineLogo>

      <AirlineName>{props.attribute.name}</AirlineName>
      <div className="airline-score">{props.attribute.avg_score}</div>
      <LinkWrap>
        <Link to={`/airlines/${props.attribute.slug}`}>View Brand</Link>
      </LinkWrap>
    </Card>
  );
};

export default Airline;
