import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.searchTerm} onChange={event => this.setState({searchTerm: event.target.value})} />
          <button>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchReviews(this.state.searchTerm)
  }

  fetchReviews = (searchTerm) => {
    fetch(URL + "&query=" + searchTerm)
    .then(resp => resp.json())
    .then(reviews => this.setState({reviews: reviews.results}))
  }
}

export default SearchableMovieReviewsContainer