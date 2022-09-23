import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  if (!auth.me) {
    return <h1>You don't have access. Sign in!</h1>;
  }

  return children;
};
