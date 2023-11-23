import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Theme = ({ children }) => {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
      success: "#4CAF50",
    },
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      subtitle1: {},
      subtitle2: {},
      body1: {},
      body2: {},
      button: {},
      caption: {},
      overline: {},
    },
    button: {
      boxShadow: "unset",
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { size: "extraSmall" },
            style: { fontSize: 14, lineHeight: 1, padding: ".65em 1em" },
          },
        ],
      },
      MuiLink: {
        variants: [
          {
            props: { color: "success" },
            style: { fontSize: 14, lineHeight: 1, padding: ".65em 1em" },
          },
        ],
      },
    },
    palette: {
      white: {
        main: "#fff",
        contrastText: "#444",
      },
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "rgba(25, 118, 210, 0.3)",
      },
      error: {
        main: "#D32F2F",
      },
      muted: {
        main: "#B3B3B3",
        light: "#7C7C7C",
        contrastText: "#fff",
      },
      success: {
        main: "#4CAF50",
        dark: "#206923",
        contrastText: "#fff",
      },
      successLight: {
        main: "#5CB660",
        contrastText: "#fff",
      },
      pink: {
        main: "#BA68C8",
        contrastText: "#fff",
      },

      pink: {
        main: "#BA68C8",
        contrastText: "#fff",
      },
      pinkLight: {
        main: "#CF96D9",
        contrastText: "#fff",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
