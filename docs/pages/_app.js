import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = createContext({
  toggleColorMode: () => {
  }
});

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = useMemo(() => createTheme({
    palette: {
      primary: { main: "#212121" },
      secondary: { main: "#000" },
      mode
    }
  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
