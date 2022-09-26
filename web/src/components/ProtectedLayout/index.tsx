import { Container } from "@mui/material";
import styled from "styled-components";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const StyledH1 = styled.h1`
    margin: auto;
  `;
  
  const auth = useAuth();
    setTimeout(() => {

    }, 100);

  if (!auth.me) {
    return (
      <Container
        sx={{
          height: "90vh",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
        }}
      >
        <StyledH1>You don't have access. <a href="/login">Sign in!</a></StyledH1>
      </Container>
    );
  }

  return children;
};
