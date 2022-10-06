import { Box, Container } from "@mui/material";
import Form from "./Form";

function MovieForm() {
  return (
    <Container sx={{ height: "15vh", display: "flex" }}>
      <Box
        className="form"
        sx={{
          width: "fit-content",
          background: "rgba(255,255,255,0.1)",
          padding: "1em",
          display: "flex",
          justifycontent: "center",
          margin: "auto",
          borderRadius: "15px",
          boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.75)",
          zIndex: 2,
        }}
      >
        <Form />
      </Box>
    </Container>
  );
}

export default MovieForm;
