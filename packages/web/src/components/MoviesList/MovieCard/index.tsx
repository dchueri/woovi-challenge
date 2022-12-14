import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ConnectionHandler, useMutation } from "react-relay";
import { ROOT_ID } from "relay-runtime";
import styled from "styled-components";
import { DeleteMovieMutation, updater } from "../../../modules/movie/DeleteMovieMutation";
import { IMovieEdge } from "../../../types/MovieTypes";
import MovieDetails from "../../MovieDetails";
import Details from "../../MovieDetails/Details";

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

  const connectionID = ConnectionHandler.getConnectionID(ROOT_ID, "Feed_movies");

  const handleDeleteMovie = async (id: string, nodeId: string) => {
    const variables = { nodeId, id, connections: [connectionID] };
    
    deleteMovieMutation({
      variables,
      updater,
      onError: (error) => console.log(error),
    });
  };

  const card = (movie: any) => (
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
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              gap: "0.2em",
            }}
          >
            <Typography color="text.secondary">{movie.average}</Typography>
            <StarOutlineIcon />
          </Grid>
          <Button color="error" sx={{ minWidth: "auto", borderRadius: "50px" }}>
            <DeleteForeverOutlinedIcon
              color="action"
              onClick={() => {
                handleDeleteMovie(movie._id, movie.id);
              }}
            />
          </Button>
        </Grid>
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
