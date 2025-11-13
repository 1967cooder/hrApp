import axios from "axios";

function AddEmployee({ formData, setFormData, handleClick }) {
  const handleChange = (e) => {
    // Функция за обработка на промени в полетата на формата
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвратяваме презареждането на страницата

    axios //päivitä tähän axios
      .post("http://localhost:3001/employees", formData)
      .then((response) => {
        setEmployees(employees.concat(response.data));
      });

    handleClick(); // Извикваме функцията за добавяне на служител
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
    <section className="container">
      <form className="form" onSubmit={handleSubmit}>
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
