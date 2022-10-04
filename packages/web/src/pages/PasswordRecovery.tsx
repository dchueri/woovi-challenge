import emailjs from "@emailjs/browser";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useMutation } from "react-relay";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { LoginBox } from "../components/styleds";
import { UpdateUserMutation } from "../modules/user/UpdateUserMutation";
import { UpdateUserMutation as UpdateUserMutationType } from "../modules/user/__generated__/UpdateUserMutation.graphql";
import routesConfig from "../routes/routesConfig.json";
import { alertDispatch, Severity } from "../utils/alerts";
import { alertState } from "../utils/atom";

export default function PasswordRecoveryForm() {
  const [updateUserMutation] =
    useMutation<UpdateUserMutationType>(UpdateUserMutation);
  const [loading, setLoading] = useState(false);
  const setAlertState = useSetRecoilState(alertState);

  async function recoveryTokenGenerate(email: string) {
    const recovery = uuidv4();
    const link = import.meta.env.VITE_WEB_HOST + "recovery/" + recovery;
    const emailParams = { email: email, link: link };
    const variables = { email: email, recovery: recovery };
    updateUserMutation({
      variables,
      onCompleted: () => {
        emailjs.send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          emailParams,
          import.meta.env.VITE_PUBLIC_KEY
        );
        const alert = {
          display: true,
          severity: Severity.success,
          content: `If ${email} it's correctly. You'll receive your recovery link.`,
        };
        alertDispatch(alert, setAlertState);
        setLoading(false);
        return;
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(!loading);
    const data = new FormData(event.currentTarget);
    const email = data.get("email")!.toString();
    await recoveryTokenGenerate(email);
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
          Recovery Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography component="p">
            You'll recive an e-mail with your recovery link.
          </Typography>
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
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Send mail
          </LoadingButton>
          <Grid container>
            <Grid item sx={{ width: "100%" }}>
              <Link
                href={routesConfig.login}
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
