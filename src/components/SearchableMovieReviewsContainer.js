import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
// provide a searchable interface allowing the user to enter a search term and then receive a list of reviews that match the search term(s)
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }


  handleChange = (event) =>{
    this.setState({searchTerm: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
  }

  // top-level wrapping element with class searchable-movie-reviews
  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.handleChange} type="text" placeholder="search for movie review" value={this.state.searchTerm}></input>
          <button type="submit">search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}></MovieReviews>
      </div>
    )
  }
}