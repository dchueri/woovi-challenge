import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { useRecoilState } from "recoil";
import { darkState } from "../../utils/atom";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const ThemeProviders = ({ children }: { children: JSX.Element }) => {
  const [dark, setDarkState] = useRecoilState(darkState);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setDarkState(dark === "light" ? "dark" : "light");
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark as 'dark' | 'light',
        },
      }),
    [dark]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
