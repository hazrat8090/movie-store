import "./index.css";
import NaveBar from "./components/NaveBar";
import MainMenue from "./components/MainMenue";
import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import SearchBox from "./components/SearchBox";
import ResultsOfMovies from "./components/ResultsOfMovies";
import ListOfUnwathcedMovies from "./components/ListOfUnwatchedMovies";
import BoxMovies from "./components/BoxMovies";
import WatchedMoviesSummary from "./components/WatchedMoviesSummary";
import ListOfWatchedMovies from "./components/ListOfWatchedMovies";
import RatingStars from "./components/RatingStars";
import TestStars from "./components/TestStars";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

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

const KEY = "fef5743f";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok)
            throw new Error("Something Went Wrong With Fetching Movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie Not Found");
          setMovies(data.Search);
          console.log(data);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <NaveBar>
        <Logo />
        <SearchBox query={query} setQuery={setQuery} />
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
          {/* {isLoading ? <Loader /> : <ListOfUnwathcedMovies movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <ListOfUnwathcedMovies movies={movies} />}
          {error && <ErrorMessage message={error} />}
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
