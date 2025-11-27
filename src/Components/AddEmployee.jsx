import axios from "axios";
import styles from "./AddEmployee.module.css";

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

  return (
    <section className={styles.addEmployeeContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="salary">Salary:</label>
        <input
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="animal">Animal:</label>
        <input
          id="animal"
          name="animal"
          value={formData.animal}
          onChange={handleChange}
          required
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <label htmlFor="department">Department:</label>
        <input
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <label htmlFor="skills">Skills:</label>
        <input
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <button type="submit">Add Employee</button>
        <button
          type="reset"
          onClick={() => {
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
          }}
        >
          Reset Form
        </button>
      </form>
    </section>
  );
}

export default AddEmployee;
