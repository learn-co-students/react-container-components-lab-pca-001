import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'VpUJAcrciWN5gf3jEkXJnAHrAJ8tQP9Y';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  state = { reviews: [] }

  componentDidMount() {
    this.fetchReviews()
  }

  fetchReviews() {
    fetch(URL)
    .then(resp => resp.json())
    .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer