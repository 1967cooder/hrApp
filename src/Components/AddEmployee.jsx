function AddEmployee({ addEmployeeData, setEmployeeData, handleClick }) {
  const handleChange = (e) => {
    setEmployeeData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
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
    <div>
      <form className="add-employee-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={addEmployeeData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={addEmployeeData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="salary">Salary:</label>
        <input
          id="salary"
          name="salary"
          value={addEmployeeData.salary}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          name="phone"
          value={addEmployeeData.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={addEmployeeData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="animal">Animal:</label>
        <input
          id="animal"
          name="animal"
          value={addEmployeeData.animal}
          onChange={handleChange}
          required
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          value={addEmployeeData.startDate}
          onChange={handleChange}
          required
        />
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          name="location"
          value={addEmployeeData.location}
          onChange={handleChange}
          required
        />
        <label htmlFor="department">Department:</label>
        <input
          id="department"
          name="department"
          value={addEmployeeData.department}
          onChange={handleChange}
          required
        />
        <label htmlFor="skills">Skills (comma separated):</label>
        <input
          id="skills"
          name="skills"
          value={addEmployeeData.skills}
          onChange={handleChange}
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
