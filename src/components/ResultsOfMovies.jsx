import React from "react";

function ResultsOfMovies({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default ResultsOfMovies;
