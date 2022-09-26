import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import styled from "styled-components";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

const Div = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
`;

function MainPanel() {
  return (
    <Suspense
      fallback={
        <Div>
          <CircularProgress />
        </Div>
      }
    >
      <MovieForm />
      <MoviesList />
    </Suspense>
  );
}

export default MainPanel;
