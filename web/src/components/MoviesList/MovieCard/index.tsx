import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { useMutation } from "react-relay";
import { DeleteMovieMutation } from "../../../modules/DeleteMovieMutation";
import { IMovie } from "../../../types/MovieTypes";

export default function MovieCard(props: {
  movie: any;
  moviesList: any;
  setMoviesList: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [deleteMovieMutation] = useMutation(DeleteMovieMutation);

  const handleDeleteMovieOfList = (id: string) => {
    props.setMoviesList((prev) => prev.filter((movie) => movie.node.id !== id));
  };

  const handleDeleteMovie = async (id: string) => {
    const variables = { id: id };
    deleteMovieMutation({
      variables,
      onCompleted: (res) => console.log(res),
      onError: (error) => console.log(error),
    });
    handleDeleteMovieOfList(id);
  };

  const card = (movie: IMovie) => (
    <Fragment>
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
    </Fragment>
  );

  return (
    <Box sx={{ width: "fit-content", padding: "1em", display: "inline-flex" }}>
      <Card variant="outlined">{card(props.movie.node)}</Card>
    </Box>
  );
}
