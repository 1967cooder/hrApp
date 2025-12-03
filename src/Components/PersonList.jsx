import PersonCard from "./PersonCard";
import styles from "./PersonList.module.css";

const PersonList = ({ employees, setEmployees }) => {
  console.log(employees);
  return (
    <>
      <section className={styles.employee}>
        {employees.map((employee) => (
          <PersonCard
            key={employee.id}
            {...employee}
            employees={employees}
            setEmployees={setEmployees}
            /* Tämä kaikki = {...employee}
            name={employee.name}
            title={employee.title}
            salary={employee.salary}
            phone={employee.phone}
            email={employee.email}
            animal={employee.animal}
            startDate={employee.startDate}
            location={employee.location}
            department={employee.department}
            skills={employee.skills} */
          />
        ))}
      </section>
    </>
  );
};
export default PersonList;
