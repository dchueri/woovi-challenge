import { CssBaseline } from "@mui/material";
import { RecoilRoot } from "recoil";
import Alerts from "./components/Alerts";
import { FooterCopyright } from "./components/FooterCopyright";
import { ThemeProviders } from "./components/theme/ThemeProvider";
import ThemeToggle from "./components/theme/ThemeToggle";
import { AuthProvider } from "./context/AuthProvider";
import { IndexRoutes } from "./routes";

function App() {

  return (
    <RecoilRoot>
      <ThemeProviders>
        <>
          <CssBaseline />
          <AuthProvider>
            <>
              <IndexRoutes />
              <Alerts />
              <ThemeToggle />
              <FooterCopyright />
            </>
          </AuthProvider>
        </>
      </ThemeProviders>
    </RecoilRoot>
  );
}

export default App;
