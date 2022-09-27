import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useMutation } from "react-relay";
import { useRecoilValue } from "recoil";
import { DeleteMovieMutation } from "../../../../modules/movie/DeleteMovieMutation";
import { IMovie, IMovieEdge } from "../../../../types/MovieTypes";
import { idOfListState } from "../../../../utils/atoms";

export default function MovieCard(props: { movie: IMovieEdge | null }) {
  const [deleteMovieMutation] = useMutation(DeleteMovieMutation);
  const idOfList = useRecoilValue(idOfListState);

  const handleDeleteMovie = async (id: string) => {
    const variables = { id: id, connections: [idOfList] };
    deleteMovieMutation({
      variables,
      onError: (error) => console.log(error),
    });
  };

  const card = (movie: IMovie) => (
    <CardContent
      sx={{
        textAlign: "center",
        gap: "0.5em",
        display: "grid",
        justifyItems: "center",
        padding: "1em",
      }}
    >
      <Typography variant="h5" component="div">
        {movie.title}
      </Typography>
      <Typography color="text.secondary">{movie.genre}</Typography>
      <DeleteForeverOutlinedIcon
        color="error"
        onClick={() => {
          handleDeleteMovie(movie.id);
        }}
      />
    </CardContent>
  );

  return (
    <Box
      sx={{
        width: "fit-content",
        padding: "0.5em",
        display: "inline-flex",
      }}
    >
      <Card variant="outlined" sx={{ borderRadius: "20px", minWidth: "7em" }}>
        {card(props.movie!.node)}
      </Card>
    </Box>
  );
}
