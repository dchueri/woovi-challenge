import { Container } from "@mui/material";
import styled from "styled-components";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const StyledH1 = styled.h1`
    margin: auto;
  `;
  const auth = useAuth();
  if (!auth.me) {
    return (
      <Container sx={{ height: "95vh", margin: "0 auto", textAlign: "center" }}>
        <StyledH1>You don't have access. Sign in!</StyledH1>
      </Container>
    );
  }

  return children;
};
