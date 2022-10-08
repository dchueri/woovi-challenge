import { CssBaseline } from '@mui/material';
import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProviders } from './components/theme/ThemeProvider';

import { AuthProvider } from './modules/auth/AuthContext';
import { RelayEnvironment } from './relay/RelayEnvironment';

interface Props {
  children: React.ReactElement;
}

export const Providers = ({ children }: Props) => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <RecoilRoot>
        <ThemeProviders>
          <>
            <CssBaseline />
            <BrowserRouter>
              <AuthProvider>{children}</AuthProvider>
            </BrowserRouter>
          </>
        </ThemeProviders>
      </RecoilRoot>
    </RelayEnvironmentProvider>
  );
};
