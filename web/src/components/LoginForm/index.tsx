import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { getUserLocalStorage } from "../../context/AuthProvider/util";

const LoginBox = styled(Container)({
  width: "20vw",
  minWidth: "25em",
  height: "100%",
  borderRadius: "15px",
  backgroundColor: "rgba(255,255,255,0.05)",
  margin: "20vh auto",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  padding: "1em",
});

export default function LoginForm() {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")!.toString();
    const password = data.get("password")!.toString();
    await auth.authenticate(email, password);
    const user = getUserLocalStorage();
    if (!user.token) {
      return console.log("Login failed");
    }
    navigate("/");
  };

  return (
    <LoginBox>
      <Box
        sx={{
          marginTop: 0,
          display: "content",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main", margin: "auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item sx={{ width: "100%" }}>
              <Link href="#" variant="body2" sx={{ textAlign: "center" }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LoginBox>
  );
}
