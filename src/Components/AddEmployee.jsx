import axios from "axios";
// import styles from "./AddEmployee.module.css";
import { Box, TextField, Button, Typography } from "@mui/material";
import { _post } from "../hooks/useAxios";

function AddEmployee({ formData, setFormData, employees, setEmployees }) {
  const handleChange = (e) => {
    // Функция за обработка на промени в полетата на формата
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвратяваме презареждането на страницата

    try {
      _post("https://hrapp-mock-api.onrender.com/api/employees", formData).then(
        (response) => {
          setEmployees(employees.concat(response.data));
        }
      );
    } catch (error) {
      console.log("Error adding data: ", error);
    }

    // Convert skills string into array
    const newEmployee = {
      ...formData,
      skills: formData.skills
        ? formData.skills.split(",").map((skill) => skill.trim())
        : [],
    };

    // axios
    //   .post("https://hrapp-mock-api.onrender.com/employees", newEmployee)
    //   .then((response) => {
    //     // Update local state
    //     setEmployees([...employees, response.data]);
    //   });

    setFormData({
      // Нулираме формата след изпращане,Reset form after submission
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

  const handleReset = () => {
    setFormData({
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Add New Employee
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <TextField
        label="Salary"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        required
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Animal"
        name="animal"
        value={formData.animal}
        onChange={handleChange}
        required
      />
      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        value={formData.startDate}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        required
      />
      <TextField
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <TextField
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
      />
      <TextField
        label="Skills (comma separated)"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
      />

      <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}>
        <Button variant="outlined" color="error" onClick={handleReset}>
          Reset Form
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Add Employee
        </Button>
      </Box>
    </Box>
  );
}

export default AddEmployee;
