import React from "react";
import "../ReviewSection/reviewSection.css";

function ReviewCard({ userName }) {
  return (
    <div className="review-card-container">
      <div className="review-top-div">
        <h2>{userName}</h2>
        <div className="user-short-hand">
          <p>AB</p>
        </div>
      </div>
      <div className="review-count">
        <i class="ri-star-fill stars-review"></i>
        <i class="ri-star-fill stars-review"></i>
        <i class="ri-star-fill stars-review"></i>
        <i class="ri-star-fill stars-review"></i>
        <i class="ri-star-fill stars-review"></i>
      </div>
      <div className="review-desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo
          modi atque quisquam unde, quasi dolorem expedita architecto nulla
          sapiente rem assumenda natus quam. Nulla sed ducimus laborum! Eos,
          quae?
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
