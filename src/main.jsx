import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

// import axios from "axios";

// axios.get("https://hrapp-mock-api.onrender.com/employees").then((response) => {
//   const employees = response.data;
//   console.log(employees);
// });

// const promise2 = axios.get("https://hrapp-mock-api.onrender.com/foobar");
// console.log(promise2);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
