// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    return (
        <div className = "review-list">
            {props.map(this.reviews)}
        </div>
    )
}

export default MovieReviews