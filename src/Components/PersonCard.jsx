import styles from "./PersonCard.module.css";

//-----------calculateServiceYears---------------------------
const calculateServiceYears = (startDate) => {
  const start = new Date(startDate); // Превръщаме началната дата (текст) в обект от тип Date
  const today = new Date(); // Създаваме нов обект Date за днешната дата

  // Разлика в месеци
  const months =
    (today.getFullYear() - start.getFullYear()) * 12 +
    (today.getMonth() - start.getMonth());
  const totalYears = months / 12; // Преобразуваме в години (може да е десетично число)

  let years = today.getFullYear() - start.getFullYear(); // Разлика между годините

  // Ако още не е минала годишнината за тази година, изваждаме 1 година
  if (
    today.getMonth() < start.getMonth() || // Ако текущият месец е преди месеца на старта
    (today.getMonth() === start.getMonth() && today.getDate() < start.getDate()) // Или е същия месец, но още не е минал денят
  ) {
    years--; // Все още не е навършена пълна година, затова изваждаме 1
  }

  //-----------reminderMessage---------------------------
  let reminderMessage = "";

  if (totalYears < 0.5) {
    reminderMessage += "🔔Schedule probation review.";
  } else if (years % 5 === 0 && years !== 0) {
    reminderMessage += "🎉Schedule recognition meeting.";
  }

  return { serviceYears: years, reminderMessage };
};
//--------------------------------------

const PersonCard = (props) => {
  const { serviceYears, reminderMessage } = calculateServiceYears(
    props.startDate
  );

  return (
    <div className={styles["person-card"]}>
      <h2>{props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Salary: {props.salary}</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Animal: {props.animal}</p>
      <p>StartDate: {props.startDate}</p>
      <p>
        Service Years: {serviceYears} {reminderMessage}
      </p>
      <p>Location: {props.location}</p>
      <p>Department: {props.department}</p>
      <p>Skills: {props.skills.join(", ")}</p>
    </div>
  );
};

export default PersonCard;
