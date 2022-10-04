import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "../components/ProtectedLayout";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import MoviesPanel from "../pages/MoviesPanel";
import PasswordChange from "../pages/PasswordChange";
import PasswordRecovery from "../pages/PasswordRecovery";
import { RegisterUser } from "../pages/RegisterUser";
import routesConfig from "./routesConfig.json";

export const IndexRoutes = () => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <BrowserRouter>
        <Routes>
          <Route path={routesConfig.home} element={<Home />} />
          <Route path={routesConfig.login} element={<Login />} />
          <Route path={routesConfig.register} element={<RegisterUser />} />
          <Route path={routesConfig.recovery} element={<PasswordRecovery />} />
          <Route
            path={routesConfig.passwordChange}
            element={<PasswordChange />}
          />
          <Route
            path={routesConfig.movies}
            element={
              <ProtectedLayout>
                <MoviesPanel />
              </ProtectedLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};
