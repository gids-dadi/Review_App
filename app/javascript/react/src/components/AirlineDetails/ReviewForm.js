import React from "react";

const ReviewForm = (props) => {
  // console.log(props);
  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>
          Have an experience with {props.attributes.name}? share your review
        </div>

        <div className="field">
          <input
            type="text"
            name="title"
            value={props.attributes.reviews.title}
            placeholder="Review Title"
            onChange={props.handleChange}
          />
        </div>

        <div className="field">
          <input
            type="text"
            name="description"
            value={props.attributes.reviews.description}
            placeholder="Review Description"
            onChange={props.handleChange}
          />
        </div>

        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate This Airline</div>
            [Star Rating Goes Here]
          </div>
        </div>

        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
