const Card = (props) => {
  return (
    <div className="box">
      <h2> {props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Salary: {props.salary}</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Animal: {props.animal}</p>
    </div>
  );
};

/*function Card({ name, title, salary, phone, email, animal }) {
  return (
    <div className="box">
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{salary}</p>
      <p>{phone}</p>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>{animal}</p>
    </div>
  );
}
*/
export default Card;
