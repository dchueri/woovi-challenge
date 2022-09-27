import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
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
        <AuthProvider>
          <>
            <IndexRoutes />
            <FooterCopyright />
          </>
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
