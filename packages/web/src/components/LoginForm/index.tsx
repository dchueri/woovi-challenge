import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useAuth } from '../../modules/auth/useAuth';
import { getUserLocalStorage } from '../../modules/auth/util';
import { LoginMutation } from '../../modules/user/LoginMutation';
import { LoginMutation as LoginMutationType } from '../../modules/user/__generated__/LoginMutation.graphql';
import allRoutes from '../../routes/routesConfig.json';
import { IUser } from '../../types/UserTypes';
import { alertDispatch, Severity } from '../../utils/alerts';
import { alertState } from '../../utils/atom';
import { LoginBox } from '../styleds';

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
    navigate(allRoutes.movies);
  }, [newUser]);

  async function authenticate(email: string, password: string) {
    let payload: any;
    const variables = { email: email, password: password };
    loginMutation({
      variables,
      onCompleted: res => {
        if (!res.LoginMutation?.token) {
          const alert = {
            display: true,
            severity: Severity.error,
            content: 'Email or password is invalid. Please, try again!',
          };
          alertDispatch(alert, setAlertState);
          setLoading(false);
          return;
        }
        payload = {
          token: res.LoginMutation?.token,
          me: res.LoginMutation?.me,
        };
        const alert = {
          display: true,
          severity: Severity.success,
          content: `Welcome ${res.LoginMutation!.me!.name}`,
        };
        alertDispatch(alert, setAlertState);
        auth.signin(payload);
        navigate(allRoutes.movies);
        setNewUser(payload);
      },
      onError: error => {
        console.log(error);
      },
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(!loading);
    const data = new FormData(event.currentTarget);
    const email = data.get('email')!.toString();
    const password = data.get('password')!.toString();
    await authenticate(email, password);
  };

  return (
    <LoginBox>
      <Box
        sx={{
          marginTop: 0,
          display: 'content',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{ bgcolor: 'primary.main', margin: '0.5em auto 0.5em auto' }}
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
          <Grid item sx={{ width: '100%', textAlign: 'end' }}>
            <Link href={allRoutes.recovery} variant="body2">
              {'Forgot password ?'}
            </Link>
          </Grid>
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
            <Grid item xs={12} sx={{ width: '100%' }}>
              <Link
                href={allRoutes.register}
                variant="body2"
                sx={{ textAlign: 'center' }}
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
