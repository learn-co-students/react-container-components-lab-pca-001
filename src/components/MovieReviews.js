// Code MovieReviews Here
import React from 'react';

const Comp = ({headline}) => <div key={headline} className="review">{headline}</div>

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Comp)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;