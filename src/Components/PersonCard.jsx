import Skill from "./Skill";

const PersonCard = (props) => {
  let startingTime = props.startDate;
  console.log(startingTime);

  const getAge = (startingTime) => {
    return Math.floor(
      (new Date() - new Date(startingTime).getTime()) /
        (1000 * 60 * 60 * 24 * 365)
    );
  };
  return (
    <>
      <div className="person-card">
        <h2>{props.name}</h2>
        <p>Title: {props.title}</p>
        <p>Salary: {props.salary}</p>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        <p>Animal: {props.animal}</p>
        <p>StartDate: {props.startDate}</p>

        <p>Service Years: {getAge(startingTime)}</p>

        <p>Location: {props.location}</p>
        <p>Department: {props.department}</p>
        {/* <p>Skills: {props.skills}</p> */}
        <Skill skills={props.skills} />
      </div>
      <hr />
    </>
  );
};
export default PersonCard;
