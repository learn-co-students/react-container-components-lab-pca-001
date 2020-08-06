import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: "",
    reviews: []
  }

  render() {
    return(
    <div className="searchable-movie-reviews ">
      <h4>Search Movie Reviews</h4>
      <form onSubmit={this.handleSearchSubmit}>
        <input onChange={this.handleSearchInputChange} value={this.state.searchTerm}/>
        <button>Search</button>
      </form>
      <MovieReviews reviews={this.state.reviews}/>
    </div>
    )
  }

  handleSearchInputChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  handleSearchSubmit = event => {
    event.preventDefault()
    this.fetchFlicks(this.state.searchTerm)
  }

  fetchFlicks(searchTerm) {
    fetch(URL + "query" + searchTerm)
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }

}
