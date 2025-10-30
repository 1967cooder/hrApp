import PersonCard from "./PersonCard";

const PersonList = ({ employees }) => {
  console.log(employees);
  return (
    <>
      <p>komponentti PersonList</p>
      <section className="employee">
        {employees.map((employee) => (
          <PersonCard
            key={employee.id}
            name={employee.name}
            title={employee.title}
            salary={employee.salary}
            phone={employee.phone}
            email={employee.email}
            animal={employee.animal}
            startDate={employee.startDate}
            location={employee.location}
            department={employee.department}
            skills={employee.skills}
          />
        ))}
      </section>
    </>
  );
};
export default PersonList;
