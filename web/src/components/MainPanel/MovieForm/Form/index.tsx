import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useMutation } from "react-relay";
import { CreateMovieMutation } from "../../../../modules/movie/CreateMovieMutation";

function Form() {
  const [createMovieMutation] = useMutation(CreateMovieMutation);

  const handleCreateMovie = async (title: string, genre: string) => {
    const variables = { title: title, genre: genre };
    createMovieMutation({
      variables,
      onCompleted: (res) => console.log(res),
      onError: (error) => console.log(error),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const title = data.get("title")!.toString();
    const genre = data.get("genre")!.toString();
    await handleCreateMovie(title, genre);
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