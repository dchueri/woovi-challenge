import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import * as React from "react";
import { useEffect, useState } from "react";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { RegisterUserMutation } from "../../modules/user/RegisterUserMutation";
import routesConfig from "../../routes/routesConfig.json";
import { IUser, RegisterUserResponse } from "../../types/UserTypes";
import { alertDispatch, Severity } from "../../utils/alerts";
import { alertState } from "../../utils/atom";

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
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState<IUser>();
  const setAlertState = useSetRecoilState(alertState);
  const auth = useAuth();

  useEffect(() => {
    const user = getUserLocalStorage();
    if (!user) {
      return;
    }
    navigate(routesConfig.movies);
  }, [newUser]);

  const createUser = async (name: string, email: string, password: string) => {
    const variables = { name: name, email: email, password: password };
    registerUserMutation({
      variables,
      onCompleted: (res: RegisterUserResponse) => {
        if (!res.RegisterUserMutation!.token) {
          const alert = {
            display: true,
            severity: Severity.warning,
            content: res.RegisterUserMutation!.error,
          };
          alertDispatch(alert, setAlertState);
          setLoading(false);
          return;
        }
        const payload = {
          token: res.RegisterUserMutation?.token,
          me: res.RegisterUserMutation?.me,
        };
        const alert = {
          display: true,
          severity: Severity.success,
          content: "You have been registered! Welcome!",
        };
        alertDispatch(alert, setAlertState);
        auth.setUserRegistered(payload);
        setNewUser(payload);
      },
      onError: (error) => console.log(error),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(!loading);
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
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            type="email"
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
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </LoadingButton>
          <Grid container>
            <Grid item sx={{ width: "100%" }}>
              <Link href="/login" variant="body2" sx={{ textAlign: "center" }}>
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </RegisterBox>
  );
}
