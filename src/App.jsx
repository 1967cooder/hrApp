import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import PersonList from "./Components/PersonList.jsx";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import AddEmployee from "./Components/AddEmployee.jsx";
import employeeData from "./assets/employeeData.json";

function App() {
  const [employees, setEmployees] = useState(employeeData);
  const [addEmployeeData, setEmployeeData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const handleAddEmployee = () => {
    const newEmployee = {
      id: Date.now(),
      ...addEmployeeData,
      skills: addEmployeeData.skills
        ? addEmployeeData.skills.split(",").map((skill) => skill.trim())
        : [],
    };
    // Добавяме новия служител към списъка
    setEmployees((prev) => [...prev, newEmployee]);
    // Нулираме формата
    setEmployeeData({
      name: "",
      title: "",
      salary: "",
      phone: "",
      email: "",
      animal: "",
      startDate: "",
      location: "",
      department: "",
      skills: "",
    });
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<PersonList employees={employees} />} />
            {/* Home route */}
            <Route path="/about" element={<About />} />
            <Route
              path="/add-employee"
              element={
                <AddEmployee
                  addEmployeeData={addEmployeeData}
                  setEmployeeData={setEmployeeData}
                  handleClick={handleAddEmployee}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
