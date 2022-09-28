import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ConnectionHandler, useMutation } from "react-relay";
import { ROOT_ID } from "relay-runtime";
import styled from "styled-components";
import { DeleteMovieMutation } from "../../../../modules/movie/DeleteMovieMutation";
import { IMovie, IMovieEdge } from "../../../../types/MovieTypes";
import MovieDetails from "../../../MovieDetails";
import Details from "../../../MovieDetails/Details";

const Img = styled.img`
  width: 10em;
`;

export default function MovieCard(props: { movie: IMovieEdge }) {
  const [deleteMovieMutation] = useMutation(DeleteMovieMutation);
  const [open, setOpen] = useState(false);

  const openWindow = () => {
    setOpen(true);
  };

  const closeWindow = () => {
    setOpen(false);
  };

  const connectionID = ConnectionHandler.getConnectionID(ROOT_ID, "All_movies");

  const handleDeleteMovie = async (id: string) => {
    const variables = { id: id, connections: [connectionID] };
    deleteMovieMutation({
      variables,
      onError: (error) => console.log(error),
    });
  };

  const card = (movie: IMovie) => (
    <motion.div className="listing" onClick={openWindow}>
      <CardContent
        sx={{
          textAlign: "center",
          gap: "0.5em",
          display: "grid",
          justifyItems: "center",
          padding: "1em",
        }}
      >
        <Img src={movie.image} />
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography color="text.secondary">{movie.genre}</Typography>
        <Button color="error" sx={{ minWidth: "auto", borderRadius: "50px" }}>
          <DeleteForeverOutlinedIcon
            color="action"
            onClick={() => {
              handleDeleteMovie(movie.id);
            }}
          />
        </Button>
      </CardContent>
    </motion.div>
  );

  return (
    <Box
      sx={{
        width: "fit-content",
        padding: "0.5em",
        display: "inline-flex",
      }}
    >
      <AnimatePresence mode={"sync"}>
        <motion.div
          layout
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <Card
            variant="outlined"
            sx={{ borderRadius: "20px", minWidth: "7em" }}
          >
            {card(props.movie!.node)}
          </Card>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <MovieDetails
            close={closeWindow}
            children={
              <Details movie={props.movie!.node} closeWindow={closeWindow} />
            }
          ></MovieDetails>
        )}
      </AnimatePresence>
    </Box>
  );
}
