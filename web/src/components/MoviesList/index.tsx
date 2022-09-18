import styled from "styled-components";
import { IMovieEdge } from "../../types/MovieTypes";
import MovieCard from "./MovieCard";

function MoviesList(props: {
  moviesList: IMovieEdge[];
  setMoviesList: React.Dispatch<React.SetStateAction<IMovieEdge[]>>;
}) {
  const Card = styled.div`
    width: 60vw;
  `;
  const handlePrintMovies = () => {
    if (props.moviesList) {
      return props.moviesList.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          moviesList={props.moviesList}
          setMoviesList={props.setMoviesList}
        />
      ));
    }
    return <p>Nothing</p>;
  };

  return <Card>{handlePrintMovies()}</Card>;
}

export default MoviesList;
