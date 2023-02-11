import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  paddding: 50px 100px 50px 0;
   font-size: 30px;

  img {
    height: 80px;
    width: 80px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -10px;
  }
`;
const TotallReviews = styled.div`
  font-size: 20px;
  padding: 10px 0;
`;
const TotalOutOf = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
`;

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const reviews = props.attributes.reviews;
  const totalReview = reviews.length;
  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name} />
        {name}
      </h1>

      <TotallReviews>{reviews.length} reviews by user</TotallReviews>
      <div className="starRating"></div>
      <TotalOutOf>{avg_score} out of 5</TotalOutOf>
    </Wrapper>
  );
};

export default Header;
