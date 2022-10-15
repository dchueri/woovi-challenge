import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import { AllMovies } from "../../modules/movie/AllMoviesQuery";
import { useNewMovieSubscription } from "../../modules/movie/useNewMovieSubscription";
import { AllMoviesQuery } from "../../modules/movie/__generated__/AllMoviesQuery.graphql";
import MovieCard from "./MovieCard";

const Body = styled(Container)({
  width: "100vw",
  minHeight: "65vh",
  display: "flex",
});

const StyledContainer = styled(Box)({
  background: "rgba(255,255,255,0.1)",
  borderRadius: "20px",
  boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.75)",
  padding: "1em",
  width: "fit-content",
  maxWidth: "60vw",
  minWidth: "50vw",
  height: "fit-content",
  minHeight: "40vh",
  margin: "auto",
});

function MoviesList() {
  const list = useLazyLoadQuery<AllMoviesQuery>(AllMovies, {});
  const [moviesList, setMoviesList] = useState(list.movies!.edges);

  useNewMovieSubscription(list.me!.id);

  useEffect(() => {
    setMoviesList(list.movies!.edges);
  });

  const handlePrintMovies = () => {
    if (moviesList!.length > 0) {
      return moviesList!.map((movie: any, index: number) => (
        <MovieCard key={index} movie={movie} />
      ));
    }
    return <p>Nothing</p>;
  };

  const variants = {
    enter: { transition: { staggerChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <Body>
        <StyledContainer>{handlePrintMovies()}</StyledContainer>
      </Body>
    </motion.div>
  );
}

export default MoviesList;
