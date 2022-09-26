import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
`;

function MainPanel() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Div>
        <CircularProgress sx={{ margin: "auto" }} />
      </Div>
    </Suspense>
  );
}

export default MainPanel;
