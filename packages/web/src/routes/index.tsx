import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from '../components/ProtectedLayout';
import Home from '../pages/Home';
import { Login } from '../pages/Login';
import MoviesPanel from '../pages/MoviesPanel';
import PasswordChange from '../pages/PasswordChange';
import PasswordRecovery from '../pages/PasswordRecovery';
import { RegisterUser } from '../pages/RegisterUser';
import allRoutes from './routesConfig.json';

export const IndexRoutes = () => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes>
        <Route path={allRoutes.home} element={<Home />} />
        <Route path={allRoutes.login} element={<Login />} />
        <Route path={allRoutes.register} element={<RegisterUser />} />
        <Route path={allRoutes.recovery} element={<PasswordRecovery />} />
        <Route path={allRoutes.passwordChange} element={<PasswordChange />} />
        <Route
          path={allRoutes.movies}
          element={
            <ProtectedLayout>
              <MoviesPanel />
            </ProtectedLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
