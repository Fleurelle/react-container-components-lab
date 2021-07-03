import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ZaYHBeS2KV3SgRYhRMGETQNO9Qr44gEm';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    fetchFunction = () => {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews:data.results
            })
        })
    }

    componentDidMount() {
        this.fetchFunction()
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
// Code LatestMovieReviewsContainer Here
