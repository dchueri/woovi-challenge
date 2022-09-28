import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { ConnectionHandler, useMutation } from "react-relay";
import { ROOT_ID } from "relay-runtime";
import { CreateMovieMutation } from "../../../../modules/movie/CreateMovieMutation";
import { getMovieImage } from "../../../../utils/moviesDB";

function Form() {
  const [createMovieMutation] = useMutation(CreateMovieMutation);

  const connectionID = ConnectionHandler.getConnectionID(ROOT_ID, "All_movies");

  const handleCreateMovie = async (
    title: string,
    genre: string,
    image: string
  ) => {
    const variables = {
      title: title,
      genre: genre,
      image: image,
      connections: [connectionID],
    };

    createMovieMutation({
      variables,
      onError: (error) => console.log(error),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title")!.toString();
    const genre = data.get("genre")!.toString();
    const image = await getMovieImage(title);
    await handleCreateMovie(title, genre, image);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        gap: "1em",
        margin: "0 auto",
      }}
    >
      <TextField
        id="title"
        name="title"
        label="Title"
        variant="outlined"
        required
      />
      <TextField
        id="genre"
        name="genre"
        label="Genre"
        variant="outlined"
        required
      />
      <Button
        type="submit"
        variant="text"
        sx={{
          height: "fit-content",
          minWidth: "min-content",
          borderRadius: "50px",
          padding: ".5em",
        }}
      >
        <AddCircleOutlineIcon />
      </Button>
    </Box>
  );
}

export default Form;
