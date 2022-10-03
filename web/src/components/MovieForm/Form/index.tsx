import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { ConnectionHandler, useMutation } from "react-relay";
import { ROOT_ID } from "relay-runtime";
import { CreateMovieMutation } from "../../../modules/movie/CreateMovieMutation";
import { getMovieInfos } from "../../../utils/moviesDB";

function Form() {
  const [createMovieMutation] = useMutation(CreateMovieMutation);

  const connectionID = ConnectionHandler.getConnectionID(ROOT_ID, "All_movies");

  const handleCreateMovie = async (
    title: string,
    genre: string,
    image: string,
    description: string,
    average: number
  ) => {
    const variables = {
      title: title,
      genre: genre,
      image: image,
      description: description,
      average: average,
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
    const movieInfos = await getMovieInfos(title);
    const image = movieInfos.image;
    const description = movieInfos.description;
    const average = movieInfos.average;
    await handleCreateMovie(title, genre, image, description, average);
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
    </Box>
  );
}

export default Form;
