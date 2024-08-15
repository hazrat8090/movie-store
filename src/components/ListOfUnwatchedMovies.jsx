import React from "react";
import DetailsOfUnwatchedMovie from "./DetailsOfUnwatchedMovie";

function ListOfUnwathcedMovies({ movies, onSelected }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <DetailsOfUnwatchedMovie movie={movie} onSelected={onSelected} />
      ))}
    </ul>
  );
}

export default ListOfUnwathcedMovies;
