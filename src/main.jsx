import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.js";

// import axios from "axios";

// axios.get("https://hrapp-mock-api.onrender.com/employees").then((response) => {
//   const employees = response.data;
//   console.log(employees);
// });

// const promise2 = axios.get("https://hrapp-mock-api.onrender.com/foobar");
// console.log(promise2);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
