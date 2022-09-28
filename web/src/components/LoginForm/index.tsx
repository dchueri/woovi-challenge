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
import { useEffect, useState } from "react";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import { LoginMutation } from "../../modules/user/LoginMutation";
import { LoginMutation as LoginMutationType } from "../../modules/user/__generated__/LoginMutation.graphql";
import { IUser } from "../../types/UserTypes";
import { alertDispatch, Severity } from "../../utils/alerts";
import { alertState } from "../../utils/atom";

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
  const [loginMutation] = useMutation<LoginMutationType>(LoginMutation);
  const [loading, setLoading] = useState(false);
  const setAlertState = useSetRecoilState(alertState);
  const navigate = useNavigate();
  const auth = useAuth();
  const [newUser, setNewUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();
    if (!user) {
      return;
    }
    navigate("/");
  }, [newUser]);

  async function authenticate(email: string, password: string) {
    let payload: any;
    const variables = { email: email, password: password };
    loginMutation({
      variables,
      onCompleted: (res) => {
        if (!res.LoginMutation) {
          const alert = {
            display: true,
            severity: Severity.error,
            content: "Email or password is invalid. Please, try again!",
          };
          alertDispatch(alert, setAlertState);
          setLoading(false)
          return;
        }
        payload = {
          token: res.LoginMutation?.token,
          me: res.LoginMutation?.me,
        };
        const alert = {
          display: true,
          severity: Severity.success,
          content: `Welcome ${res.LoginMutation.me?.name}`,
        };
        alertDispatch(alert, setAlertState);
        auth.setUserRegistered(payload);
        setNewUser(payload);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(!loading)
    const data = new FormData(event.currentTarget);
    const email = data.get("email")!.toString();
    const password = data.get("password")!.toString();
    await authenticate(email, password);
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
        <Avatar
          sx={{ bgcolor: "primary.main", margin: "0.5em auto 0.5em auto" }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item sx={{ width: "100%" }}>
              <Link
                href="/register"
                variant="body2"
                sx={{ textAlign: "center" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LoginBox>
  );
}
