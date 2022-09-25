import { useLazyLoadQuery } from "react-relay";
import { AllMovies } from "../../modules/movie/AllMoviesQuery";
import { AllMoviesQuery } from "../../modules/movie/__generated__/AllMoviesQuery.graphql";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

function MainPanel() {
  const moviesList = useLazyLoadQuery<AllMoviesQuery>(AllMovies, {});
  return (
    <>
      <MovieForm />
      <MoviesList moviesList={moviesList} />
    </>
  );
}

export default MainPanel;
