import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";
import Alerts from "./components/Alerts";
import { FooterCopyright } from "./components/FooterCopyright";
import { AuthProvider } from "./context/AuthProvider";
import { IndexRoutes } from "./routes";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#6b6b6b #2b2b2b",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "#2b2b2b",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#6b6b6b",
              minHeight: 24,
              border: "3px solid #2b2b2b",
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#2b2b2b",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RecoilRoot>
        <AuthProvider>
          <>
            <IndexRoutes />
            <Alerts />
            <FooterCopyright />
          </>
        </AuthProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
