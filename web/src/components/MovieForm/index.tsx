import { Box } from "@mui/material";
import Form from "./Form";

function MovieForm() {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      <Form />
    </Box>
  );
}

export default MovieForm;
