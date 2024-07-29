import React, { useState } from "react";
import RatingStars from "./RatingStars";

function TestStars() {
  const [movieRating, setMovieRating] = useState(0);

  const movieRatingStyle = {
    fontSize: "15px",
    color: "lime",
    fontWeight: "bold",
  };
  return (
    <div>
      <RatingStars color="yellow" maxRating={15} onSetRating={setMovieRating} />
      <p style={movieRatingStyle}>this movie was reated {movieRating} Stars</p>
    </div>
  );
}

export default TestStars;
