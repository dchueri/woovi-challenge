import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

import styled from "styled-components";
import { LogoutButton } from "../components/LogoutButton";
import MovieForm from "../components/MovieForm";
import MoviesList from "../components/MoviesList";

const Div = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WebKit = styled.div`
&::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border:1px solid black;
}
`;

function MoviesPanel() {
  return (
    <Suspense
      fallback={
        <Div>
          <CircularProgress />
        </Div>
      }
    >
      <WebKit>
        <LogoutButton />
        <MovieForm />
        <MoviesList />
      </WebKit>
    </Suspense>
  );
}

export default MoviesPanel;
