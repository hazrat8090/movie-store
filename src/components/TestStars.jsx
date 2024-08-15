import React, { useState } from "react";
import RatingStars from "./RatingStars";

function TestStars({ onSetRating }) {
  const [movieRating, setMovieRating] = useState(0);

  const movieRatingStyle = {
    fontSize: "15px",
    color: "lime",
    display: "flex",
    fontWeight: "bold",
  };
  return (
    <div>
      <RatingStars
        color="yellow"
        maxRating={10}
        size={25}
        // onSetRating={setMovieRating}
        onSetRating={onSetRating}
      />
    </div>
  );
}

export default TestStars;
