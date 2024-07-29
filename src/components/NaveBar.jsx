import React from "react";
import SearchBox from "./SearchBox";
import Logo from "./Logo";
import ResultsOfMovies from "./ResultsOfMovies";

function NaveBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

export default NaveBar;
