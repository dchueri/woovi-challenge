import { Environment, RelayEnvironmentProvider } from 'react-relay';
import { RecoilRoot } from 'recoil';
import { AuthProvider } from '../src/modules/auth/AuthContext';
import { RelayEnvironment } from '../src/relay/RelayEnvironment';

interface Props {
  children: React.ReactElement;
  relayEnvironment?: Environment;
}

export const WithProviders = ({
  children,
  relayEnvironment = RelayEnvironment,
}: Props) => (
  <RelayEnvironmentProvider environment={relayEnvironment}>
    <AuthProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </AuthProvider>
  </RelayEnvironmentProvider>
);
