import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import fetchGraphQL from "../../../fetchGraphQL";
import { IMovie, IMovieEdge } from "../../../types/MovieTypes";

export default function MovieCard(props: {
  movie: IMovieEdge;
  moviesList: IMovieEdge[];
  setMoviesList: React.Dispatch<React.SetStateAction<IMovieEdge[]>>;
}) {
  const handleDeleteMovieOfList = (id: string) => {
    props.setMoviesList((prev) => prev.filter((movie) => movie.node.id !== id));
  };

  const handleDeleteMovie = async (id: string) => {
    const variables = { id: id };
    fetchGraphQL(
      `
      mutation Movies($id: String!){
        DeleteMovie(input: {id: $id}) {
          error
          success
        }
      }
          `,
      variables
    )
      .then((response) => {
        handleDeleteMovieOfList(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const card = (movie: IMovie) => (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography color="text.secondary">{movie.genre}</Typography>
        <DeleteForeverOutlinedIcon
          onClick={() => {
            handleDeleteMovie(movie.id);
          }}
        />
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: "fit-content", padding: "1em", display: "inline-flex" }}>
      <Card variant="outlined">{card(props.movie.node)}</Card>
    </Box>
  );
}
