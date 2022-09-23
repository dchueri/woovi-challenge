import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useLazyLoadQuery } from "react-relay";
import "./App.css";
import { Copyright } from "./components/Copyrigth";
import { AuthProvider } from "./context/AuthProvider";
import { AllMovies } from "./modules/movie/AllMoviesQuery";
import { AllMoviesQuery } from "./modules/movie/__generated__/AllMoviesQuery.graphql";
import { IndexRoutes } from "./routes";
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
      <AuthProvider>
        <>
          <IndexRoutes moviesList={moviesList} />
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
