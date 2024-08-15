import React from "react";
import WatchedMoviesList from "./WatchedMoviesList";

function ListOfWatchedMovies({
  watched,
  handleSelectedMovieId,
  onDeleteFromWatchedLis,
}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMoviesList
          movie={movie}
          key={movie.imdbID}
          handleSelectedMovieId={handleSelectedMovieId}
          onDeleteFromWatchedLis={onDeleteFromWatchedLis}
        />
      ))}
    </ul>
  );
}

export default ListOfWatchedMovies;
