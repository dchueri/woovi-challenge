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
import { useEffect, useState } from "react";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { RegisterUserMutation } from "../../modules/user/RegisterUserMutation";
import { IUser, RegisterUserResponse } from "../../types/UserTypes";

const RegisterBox = styled(Container)({
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

export default function RegisterForm() {
  const navigate = useNavigate();
  const [registerUserMutation] = useMutation(RegisterUserMutation);
  const [newUser, setNewUser] = useState<IUser>();
  const auth = useAuth();

  useEffect(() => {
    const user = getUserLocalStorage();
    if (!user) {
      return;
    }
    navigate("/");
  }, [newUser]);

  const createUser = async (name: string, email: string, password: string) => {
    const variables = { name: name, email: email, password: password };
    registerUserMutation({
      variables,
      onCompleted: (res: RegisterUserResponse) => {
        if (!res.RegisterUserMutation!.token) {
          return console.log(res.RegisterUserMutation!.error);
        }
        const payload = {
          token: res.RegisterUserMutation?.token,
          me: res.RegisterUserMutation?.me,
        };
        auth.setUserRegistered(payload);
        setNewUser(payload);
      },
      onError: (error) => console.log(error),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name")!.toString();
    const email = data.get("email")!.toString();
    const password = data.get("password")!.toString();
    await createUser(name, email, password);
  };

  return (
    <RegisterBox>
      <Box
        sx={{
          marginTop: 0,
          display: "content",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary", margin: "0.5em auto 0.5em auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="Name"
            autoFocus
          />
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
            Sign up
          </Button>
          <Grid container>
            <Grid item sx={{ width: "100%" }}>
              <Link
                href="/register"
                variant="body2"
                sx={{ textAlign: "center" }}
              >
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </RegisterBox>
  );
}
