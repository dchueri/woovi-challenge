import LogoutIcon from "@mui/icons-material/Logout";
import { Button, CircularProgress } from "@mui/material";
import { Suspense } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/AuthProvider/useAuth";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

const Div = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoutDiv = styled.div`
  width: 100vw;
  height: 15vh;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function MainPanel() {
  const auth = useAuth();

  const logoutHandle = () => {
    auth.logout();
  };

  return (
    <Suspense
      fallback={
        <Div>
          <CircularProgress />
        </Div>
      }
    >
      <LogoutDiv>
        <Button
          onClick={logoutHandle}
          variant="text"
          size="small"
          sx={{
            margin: "2vw",
            borderRadius: "50px",
            height: "fit-content",
            minWidth: "fit-content",
            padding: "1em",
          }}
        >
          <LogoutIcon />
        </Button>
      </LogoutDiv>
      <MovieForm />
      <MoviesList />
    </Suspense>
  );
}

export default MainPanel;
