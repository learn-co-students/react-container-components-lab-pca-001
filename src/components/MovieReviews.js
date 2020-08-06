import React from "react"

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(review => showReview(review))}
    </div>
  )
}

function showReview(review) {
  return (
    <div className="review">
      <h2>{review.headline}</h2>
    </div>
  )
}

export default MovieReviews
