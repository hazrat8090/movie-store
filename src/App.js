import "./index.css";
import NaveBar from "./components/NaveBar";
import MainMenue from "./components/MainMenue";
import { useState } from "react";
import Logo from "./components/Logo";
import SearchBox from "./components/SearchBox";
import ResultsOfMovies from "./components/ResultsOfMovies";
import ListOfUnwathcedMovies from "./components/ListOfUnwatchedMovies";
import BoxMovies from "./components/BoxMovies";
import WatchedMoviesSummary from "./components/WatchedMoviesSummary";
import ListOfWatchedMovies from "./components/ListOfWatchedMovies";
import RatingStars from "./components/RatingStars";
import TestStars from "./components/TestStars";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NaveBar>
        <Logo />
        <SearchBox />
        <ResultsOfMovies movies={movies} />
      </NaveBar>
      <RatingStars
        maxRating={15}
        messages={[
          "Awful",
          "Terrible",
          "Horrible",
          "Bad",
          "Poor",
          "Not Good",
          "Mediocre",
          "Fair",
          "Okay",
          "Good",
          "Very Good",
          "Great",
          "Excellent",
          "Amazin",
          "Outstanding",
        ]}
      />

      <MainMenue>
        <BoxMovies>
          <ListOfUnwathcedMovies movies={movies} />
        </BoxMovies>

        <BoxMovies>
          <WatchedMoviesSummary watched={watched} />
          <ListOfWatchedMovies watched={watched} />
        </BoxMovies>
      </MainMenue>

      <TestStars />
    </>
  );
}
