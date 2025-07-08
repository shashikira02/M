import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyBookings from "./MyBookings/MyBookings";
import Home from "./Home/Home";
import App from "./App.jsx";
import Search from "./Search/Search";
import "./index.css";
import { color, createTheme, fontFamily, lineHeight, ThemeProvider, width } from "@mui/system";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
    ],
  },
]);

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA7FF",
      green: "#00A500",
      secondary: "#1B3C74",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "8px",
          },
          contained: {
            color: "#fff",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            width: "90%",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            color: "#000",
            fontSize: "56px",
            fontWeight: "700",
          },
          h2: {
            color: "#1B3C74",
            fontSize: "48px",
            fontWeight: "600",
            lineHeight: 1.2,
          },
          h3: {
            color: "#102851",
            fontSize: "30px",
            fontWeight: "500",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            background: "#FAFBFE",
            borderRadius: "8px",
            color: "#ABB6C7",
            "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#F0F0F0",
              },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            background: "#FAFBFE",
            borderRadius: "8px",
            color: "#ABB6C7",
            "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#F0F0F0",
              },
          },
        },
      },
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: "36px",
  }
};
theme.typography.h2 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: "32px",
  }
};
theme.typography.h3 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: "24px",
  }
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

