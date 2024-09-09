import React from "react";
import "../ReviewSection/reviewSection.css";
import ReviewCard from "./ReviewCard";

function ReviewSection() {
  return (
    <div className="reviewMainContainer">
      <div className="review-container">
        <div className="review-top">
          <h1>What customer say about us?</h1>
        </div>
        <div className="reviewBottom">
          <ReviewCard userName={"Test User"} />
          <ReviewCard userName={"Test User"} />
          <ReviewCard userName={"Test User"} />
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
