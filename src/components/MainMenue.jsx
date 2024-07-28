import React from "react";
import UnwatchedMovies from "./UnwatchedMovies";
import WatchedMovies from "./WatchedMovies";

function MainMenue({ movies }) {
  return (
    <main className="main">
      <UnwatchedMovies movies={movies} />

      <WatchedMovies />
    </main>
  );
}

export default MainMenue;
