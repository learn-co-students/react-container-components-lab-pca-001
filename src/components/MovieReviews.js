// Code MovieReviews Here
import React from 'react'

// lists a series of movie reviews on the page
// presentation component: stateless and functional.
const MovieReviews = ({reviews}) => {
  return(
    // top-level element with the class review-list
      // each review is wrapped by an element with class review
    <ul className='review-list'>
      {reviews.map(review => <li className='review' key={review.display_title}> {review.display_title} </li>)}
    </ul>
  )
}


export default MovieReviews