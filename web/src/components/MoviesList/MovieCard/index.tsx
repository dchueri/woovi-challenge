import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { IMovie, IMovieEdge } from "../../../types/MovieTypes";

const card = (movie: IMovie) => (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        {movie.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {movie.genre}
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function MovieCard(props: { movie: IMovieEdge }) {
  return (
    <Box sx={{ width: "fit-content", padding: "1em", display: "inline-flex" }}>
      <Card variant="outlined">{card(props.movie.node)}</Card>
    </Box>
  );
}
