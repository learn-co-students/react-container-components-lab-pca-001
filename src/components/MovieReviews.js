// Code MovieReviews Here
import React from 'react'

function displayReview(review){

    return(
        <div className="review">
            <header>{review.headline}</header>
            <a href={review.link}>{review.critics_pick}</a>
        </div>
    )
}

const MovieReviews = ({reviews}) => {


  return (
  <div className="review-list">{reviews.map(review => displayReview(review))}</div>
  )
}

export default MovieReviews