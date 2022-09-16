import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import fetchGraphQL from "./fetchGraphQL";
import { IMovieEdge } from "./types/MovieTypes";

const { useState, useEffect } = React;

function App() {
  const [moviesList, setMoviesList] = useState<IMovieEdge[]>([]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query Movies {
        movies {
          edges {
            node {
              id
              title
              genre
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `)
      .then((response) => {
        if (!isMounted) {
          return;
        }
        const data = response.data;
        setMoviesList(data.movies.edges);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MoviesList moviesList={moviesList} />
    </ThemeProvider>
  );
}

export default App;
