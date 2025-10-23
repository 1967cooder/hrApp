import React from "react";
import "./App.css";
import Card from "./Components/Card.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Card
          name="Amy"
          title="Software Engineer"
          salary="€120,000"
          phone="555-1234"
          email="amy@hotmail.com"
          animal="Cat"
        />
        <Card
          name="Bita"
          title="Product Manager"
          salary="€130,000"
          phone="555-5678"
          email="bita@hotmail.com"
          animal="Owl"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
