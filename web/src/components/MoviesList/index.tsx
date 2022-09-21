import { useState } from "react";
import { AllMoviesQuery$data } from "../../modules/__generated__/AllMoviesQuery.graphql";
import MovieCard from "./MovieCard";

function MoviesList(props: { moviesList: AllMoviesQuery$data }) {
  const [moviesList, setMoviesList] = useState(props.moviesList.movies!.edges!);
  const handlePrintMovies = () => {
    if (moviesList) {
      return moviesList.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          moviesList={moviesList}
          setMoviesList={setMoviesList}
        />
      ));
    }
    return <p>Nothing</p>;
  };

  return <div>{handlePrintMovies()}</div>;
}

export default MoviesList;
