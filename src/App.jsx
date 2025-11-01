import React from "react";
import "./App.css";

import PersonList from "./Components/PersonList.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import employeeData from "./assets/employeeData.json";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <PersonList employees={employeeData} />
      </div>
      <Footer />
    </>
  );
}

export default App;
