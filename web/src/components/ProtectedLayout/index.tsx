import { Container } from "@mui/material";
import styled from "styled-components";
import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const StyledH1 = styled.h1`
    margin: auto;
  `;

  const Content = (): any => {
    let result;
    setTimeout(() => {
      result = <StyledH1>You don't have access. Sign in!</StyledH1>;
    }, 500);
    return result;
  };

  const auth = useAuth();
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
        <Content />
      </Container>
    );
  }

  return children;
};
