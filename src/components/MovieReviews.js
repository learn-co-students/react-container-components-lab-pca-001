import React from "react"

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(mr => MovieReview(mr))}
      </div>
  )
}

const MovieReview = ({display_title}) => {
  return <div className="review">{display_title}</div>
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews