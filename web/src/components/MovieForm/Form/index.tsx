import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useMutation } from "react-relay";
import { CreateMovieMutation } from "../../../modules/CreateMovieMutation";

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
      sx={{ mt: 1, display: "inline" }}
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
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add
      </Button>
    </Box>
  );
}

export default Form;
