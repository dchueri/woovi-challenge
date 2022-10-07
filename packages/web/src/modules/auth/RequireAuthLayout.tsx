import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { getUserLocalStorage } from './util';

export const RequireAuthLayout = () => {
  const location = useLocation();
  const user = getUserLocalStorage();

  if (!user.token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
};
