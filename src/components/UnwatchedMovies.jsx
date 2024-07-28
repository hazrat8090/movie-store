import React from "react";
import { useState } from "react";
import ListOfUnwathcedMovies from "./ListOfUnwatchedMovies";

function UnwatchedMovies({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <ListOfUnwathcedMovies movies={movies} />}{" "}
    </div>
  );
}

export default UnwatchedMovies;
