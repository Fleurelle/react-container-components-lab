// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    console.log("props", props)
    return (
        <div className="review-list">
            {/* build something that maps over the reviews then displays them */}
            {props.reviews.map(allReviews)}
        </div>
    )
}

 {/* build something that maps over the reviews then displays them */}
const allReviews = ({ headline, byline, summary_short, link }) => {
    console.log(headline)
    return (
        <div key={headline}>
            <header>
                <a href={link.url}> {headline}: </a>
                <span> <b>{byline}</b> </span>
            </header>
            <blockquote> <i>{summary_short}</i> </blockquote>
        </div>
    )
}
export default MovieReviews