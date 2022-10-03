import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import MainPanel from "../components/MainPanel";
import PasswordRecoveryForm from "../components/PasswordRecoveryForm";
import PasswordChangeForm from "../components/PasswordRecoveryForm/PasswordChangeForm";
import { ProtectedLayout } from "../components/ProtectedLayout";
import RegisterForm from "../components/RegisterForm";
import Home from "../pages/Home";
import routesConfig from "./routesConfig.json";

export const IndexRoutes = () => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <BrowserRouter>
        <Routes>
          <Route path={routesConfig.home} element={<Home />} />
          <Route path={routesConfig.login} element={<LoginForm />} />
          <Route path={routesConfig.register} element={<RegisterForm />} />
          <Route
            path={routesConfig.recovery}
            element={<PasswordRecoveryForm />}
          />
          <Route
            path={routesConfig.passwordChange}
            element={<PasswordChangeForm />}
          />
          <Route
            path={routesConfig.movies}
            element={
              <ProtectedLayout>
                <MainPanel />
              </ProtectedLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};
