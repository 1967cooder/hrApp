import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import PersonList from "./Components/PersonList.jsx";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import AddEmployee from "./Components/AddEmployee.jsx";
// import employeeData from "./assets/employeeData.json";
import employeeData from "./db.json";

import { _get } from "./hooks/useAxios";

function App() {
  const [employees, setEmployees] = useState([]); // Списък със служители
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
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await _get(
        "https://hrapp-mock-api.onrender.com/api/employees", // http://localhost:3000/api/employees
        { headers: {} }
      );
      setEmployees(response.data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };
  // Извличаме данните от локалния JSON файл при зареждане на компонента
  // setEmployees(employeeData.employees);
  console.log("effect");
  //kuin tehdään fetchData = async(ylhellä), otetaan pois tämä allapuolella
  //   axios.get("https://hrapp-mock-api.onrender.com/employees")
  //        .then((response) => {
  //     console.log("promise fulfilled");
  //     setEmployees(response.data);
  //   });
  // }, []);
  console.log("render", employees.length, "employees");
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
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <PersonList employees={employees} setEmployees={setEmployees} />
              }
            />
            {/* Home route */}
            <Route path="/about" element={<About />} />
            <Route
              path="/add-employee"
              element={
                <AddEmployee
                  formData={formData}
                  setFormData={setFormData}
                  setEmployees={setEmployees}
                  employees={employees}
                  handleClick={handleClick}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
