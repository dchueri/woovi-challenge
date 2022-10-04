import { Copyright } from "@mui/icons-material";
import { Container, Link, styled, Typography } from "@mui/material";

export const CopyrightFooter = styled(Copyright)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "10vh",
  width: "50vw",
});

export const FooterCopyright = (props: any) => {
  return (
    <Container sx={{ height: "10vh", display: "flex" }}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        margin="auto"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/dchueri">
          Diego Chueri
        </Link>
        {` ${new Date().getFullYear()}.`}
      </Typography>
    </Container>
  );
};
