import { Container } from "@mui/material";
import styled from "styled-components";
import { useAuth } from "../../modules/auth/useAuth";
import allRoutes from "../../routes/routesConfig.json";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const StyledH1 = styled.h1`
    margin: auto;
  `;

  const auth = useAuth();
  setTimeout(() => {}, 100);
  if (!auth.me) {
    return (
      <Container
        sx={{
          height: "80vh",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
        }}
      >
        <StyledH1>
          You don't have access. <a href={allRoutes.login}>Sign in!</a>
        </StyledH1>
      </Container>
    );
  }

  return children;
};
