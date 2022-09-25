import { Copyright } from "@mui/icons-material";
import { Link, styled, Typography } from "@mui/material";

export const CopyrightFooter = styled(Copyright)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "10vh",
});

export const FooterCopyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/dchueri">
        {"Diego Chueri"}
      </Link>
      <p>{` ${new Date().getFullYear()}.`}</p>
    </Typography>
  );
};
