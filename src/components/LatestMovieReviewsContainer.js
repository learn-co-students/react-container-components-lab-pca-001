import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
// use MovieReviews
export default class LatestMovieReviewsContainer extends Component {
  // fetch a list of the most recent reviews and display them
  state= {
    reviews: []
  }
  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
  }

  // top-level wrapping element with class latest-movie-reviews.
  render() {
    return(
    <div className='latest-movie-reviews'>
      <MovieReviews reviews={this.state.reviews}></MovieReviews>
    </div>
    )
  }
}
