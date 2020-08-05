import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'bGnLgRe2C4rOHII2dxod8RHEWTj5OsSX';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  fetchMovies(searchTerm) {
    fetch(URL + "&query=" + searchTerm)
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }
  

  handleSubmit = event => {
    event.preventDefault()
    this.fetchMovies(this.state.searchTerm)
  }

  handleSearchChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleSearchChange}
            value={this.state.searchTerm} />
          <button>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}


export default SearchableMovieReviewsContainer