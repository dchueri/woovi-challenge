import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { AuthProvider } from "./context/AuthProvider";
import { IndexRoutes } from "./routes";
import { CopyrightFooter } from "./styleds";
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
          <CopyrightFooter />
        </>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
