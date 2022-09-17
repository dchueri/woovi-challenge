import { Box, Button, TextField } from "@mui/material";
import React from "react";
import fetchGraphQL from "../../../fetchGraphQL";

function Form() {
  const handleCreateMovie = async (title: string, genre: string) => {
    const variables = { title: title, genre: genre };
    fetchGraphQL(
      `
        mutation Movies($title: String!, $genre: String!){
            CreateMovie(input: {title: $title, genre: $genre}) {
              movieEdge {
                node {
                  id
                  title
                  genre
                }
              }
              error
            }
        }
    `,
      variables
    )
      .then((response) => {
          console.log(response)
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const title = data.get("title")!.toString();
    const genre = data.get("genre")!.toString();
    await handleCreateMovie(title, genre);
    console.log(title, genre);
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
