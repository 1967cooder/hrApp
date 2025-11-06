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
  const [employees, setEmployees] = useState(employeeData); // Списък със служители
  const [formData, setFormData] = useState({
    // Данни за нов служител
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
  //-----------handleClick---------------------------

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: formData.name,
        title: formData.title,
        salary: formData.salary,
        phone: formData.phone,
        email: formData.email,
        animal: formData.animal,
        startDate: formData.startDate,
        location: formData.location,
        department: formData.department,
        skills: formData.skills,
        skills: formData.skills.split(",").map((skill) => skill.trim()),
      },
    ]);
  };

  // const handleAddEmployee = () => {
  //   // Добавяме нов служител към списъка
  //   const newEmployee = {
  //     // Създаваме нов обект служител
  //     id: Date.now(),
  //     ...formData,
  //     skills: formData.skills
  //       ? formData.skills.split(",").map((skill) => skill.trim())
  //       : [],
  //   };
  //   // Добавяме новия служител към списъка
  //   setEmployees((prev) => [...prev, newEmployee]);
  // Нулираме формата
  //   setFormData({
  //     name: "",
  //     title: "",
  //     salary: "",
  //     phone: "",
  //     email: "",
  //     animal: "",
  //     startDate: "",
  //     location: "",
  //     department: "",
  //     skills: "",
  //   });
  // };
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
                  formData={formData}
                  setFormData={setFormData}
                  handleClick={handleClick}
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
