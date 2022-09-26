import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import { useLazyLoadQuery } from "react-relay";
import { useRecoilState } from "recoil";
import { AllMovies } from "../../../modules/movie/AllMoviesQuery";
import { AllMoviesQuery } from "../../../modules/movie/__generated__/AllMoviesQuery.graphql";
import { moviesListState } from "../../../utils/atoms";
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

function MoviesList() {
  const list = useLazyLoadQuery<AllMoviesQuery>(AllMovies, {});
  const [moviesList, setMoviesList] = useRecoilState(moviesListState);

  useEffect(() => {
    if (moviesList.length == 0) {
      setMoviesList(list.movies!.edges);
    }
  });
  
  const handlePrintMovies = () => {
    if (moviesList.length > 0) {
      return moviesList.map((movie: any, index: number) => (
        <MovieCard key={index} movie={movie} />
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
