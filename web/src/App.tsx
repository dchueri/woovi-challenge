import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";
import { FooterCopyright } from "./components/FooterCopyright";
import { AuthProvider } from "./context/AuthProvider";
import { IndexRoutes } from "./routes";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RecoilRoot>
        <AuthProvider>
          <>
            <IndexRoutes />
            <FooterCopyright />
          </>
        </AuthProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
