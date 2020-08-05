import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {

  state = {
      searchTerm: "",
      reviews: []
  }


  handleSumbit = event => {
      event.preventDefault();

      fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(json =>{

          this.setState({reviews: json.results})

      })

  }

  handleSearchInputChange = event => {

      this.setState({searchTerm: event.target.value})
  }

  render() {
  return <div>
      <form onSubmit={this.handleSumbit}>
          <input type="text" onChange={this.handleSearchInputChange}></input>
          <button type="submit">Submit</button>
      </form>

      <MovieReviews reviews={this.state.reviews} />


  </div>
}
}

export default SearchableMovieReviewsContainer