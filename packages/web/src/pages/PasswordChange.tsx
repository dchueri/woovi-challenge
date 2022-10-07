import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { LoginBox } from "../components/styleds";
import { FindUserToRecovery } from "../modules/user/FindUserToRecoveryQuery";
import { UpdateUserMutation } from "../modules/user/UpdateUserMutation";
import { FindUserToRecoveryQuery as FindUserToRecoveryQueryType } from "../modules/user/__generated__/FindUserToRecoveryQuery.graphql";
import { UpdateUserMutation as UpdateUserMutationType } from "../modules/user/__generated__/UpdateUserMutation.graphql";
import allRoutes from "../routes/routesConfig.js";
import { alertDispatch, Severity } from "../utils/alerts";
import { alertState } from "../utils/atom";

export default function PasswordChangeForm() {
  const [updateUserMutation] =
    useMutation<UpdateUserMutationType>(UpdateUserMutation);
  const [loading, setLoading] = useState(false);
  const setAlertState = useSetRecoilState(alertState);
  const { recovery } = useParams();
  const data = useLazyLoadQuery<FindUserToRecoveryQueryType>(
    FindUserToRecovery,
    { recovery: recovery! }
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!data.user) {
      navigate(allRoutes.home);
      return;
    }
  });

  async function savePassword(password: string) {
    const email = data.user!.email!;
    const variables = { email: email, password: password };
    updateUserMutation({
      variables,
      onCompleted: () => {
        const alert = {
          display: true,
          severity: Severity.success,
          content: `Your password has been defined`,
        };
        alertDispatch(alert, setAlertState);
        setLoading(false);
        navigate(allRoutes.login);
        return;
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = data.get("password")!.toString();
    const confirmPassword = data.get("confirmPassword")!.toString();
    if (password !== confirmPassword) {
      const alert = {
        display: true,
        severity: Severity.error,
        content: `Passwords must be equals!`,
      };
      alertDispatch(alert, setAlertState);
      return;
    }
    setLoading(!loading);
    await savePassword(password);
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
          Create new password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography component="p">Type your new password.</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="New password"
            name="password"
            autoComplete="password"
            type="password"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="confirmPassword"
            label="Confirm password"
            name="confirmPassword"
            autoComplete="confirmPassword"
            type="password"
            autoFocus
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Redefine password
          </LoadingButton>
          <Grid container>
            <Grid item sx={{ width: "100%" }}>
              <Link
                href={allRoutes.login}
                variant="body2"
                sx={{ textAlign: "center" }}
              >
                {"Go back to login page"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LoginBox>
  );
}
