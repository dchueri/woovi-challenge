import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import MainPanel from "../components/MainPanel";
import { ProtectedLayout } from "../components/ProtectedLayout";
import RegisterForm from "../components/RegisterForm";

export const IndexRoutes = () => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/"
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
