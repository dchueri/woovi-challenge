import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useLazyLoadQuery } from "react-relay";
import "./App.css";
import MovieForm from "./components/MovieForm";
import MoviesList from "./components/MoviesList";
import { AllMovies } from "./modules/AllMoviesQuery";
import { AllMoviesQuery } from "./modules/__generated__/AllMoviesQuery.graphql";

function App() {
  const moviesList = useLazyLoadQuery<AllMoviesQuery>(AllMovies, {});

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MovieForm />
      <MoviesList moviesList={moviesList} />
    </ThemeProvider>
  );
}

export default App;
