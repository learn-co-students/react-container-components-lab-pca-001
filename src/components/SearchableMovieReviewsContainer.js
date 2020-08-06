import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import fetch from 'node-fetch';

const NYT_API_KEY = 'VpUJAcrciWN5gf3jEkXJnAHrAJ8tQP9Y'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`
const SEARCH_URL = URL + `&query=`

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchReviews(this.state.searchTerm)
  }

  fetchReviews(searchTerm) {
    fetch(SEARCH_URL + searchTerm)
    .then(resp => resp.json())
    .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return(
      <div className="searchable-movie-reviews ">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input onChange={this.handleChange}></input>
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer