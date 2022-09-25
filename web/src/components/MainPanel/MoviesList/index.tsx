import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { AllMoviesQuery$data } from "../../../modules/movie/__generated__/AllMoviesQuery.graphql";
import MovieCard from "./MovieCard";

const Body = styled(Container)({
  width: "100vw",
  height: "75vh",
  display: "flex",
});

const StyledContainer = styled(Box)({
  background: "rgba(255,255,255,0.1)",
  borderRadius: "20px",
  boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.75)",
  padding: "1em",
  width: "60vw",
  minHeight: "60vh",
  height: "fit-content",
  margin: "auto",
});

function MoviesList(props: { moviesList: AllMoviesQuery$data }) {
  const [moviesList, setMoviesList] = useState(props.moviesList.movies!.edges!);
  const handlePrintMovies = () => {
    if (moviesList) {
      return moviesList.map((movie: any, index) => (
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

  return (
    <Body>
      <StyledContainer>{handlePrintMovies()}</StyledContainer>
    </Body>
  );
}

export default MoviesList;
