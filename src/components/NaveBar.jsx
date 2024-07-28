import React from "react";
import SearchBox from "./SearchBox";
import Logo from "./Logo";
import ResultsOfMovies from "./ResultsOfMovies";

function NaveBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBox />
      <ResultsOfMovies movies={movies} />
    </nav>
  );
}

export default NaveBar;
