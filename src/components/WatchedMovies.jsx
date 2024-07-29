import React from "react";
import { useState } from "react";
import WatchedMoviesSummary from "./WatchedMoviesSummary";
import ListOfWatchedMovies from "./ListOfWatchedMovies";

function WatchedMovies({ children }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && <></>}
    </div>
  );
}

export default WatchedMovies;
