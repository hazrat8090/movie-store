import React from "react";
import WatchedMoviesList from "./WatchedMoviesList";

function ListOfWatchedMovies({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMoviesList movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default ListOfWatchedMovies;
