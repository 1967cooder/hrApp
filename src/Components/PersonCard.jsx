// import styles from "./PersonCard.module.css";
import axios from "axios";
import { useState } from "react";
import { _patch } from "../hooks/useAxios";

import CardMUI from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

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

  // Kenttien arvojen muokkaaminen
  // const name = props.name;
  // const salary = props.salary;
  // const location = props.location;
  // const department = props.department;
  // const skills = props.skills;
  // const id = props.id;

  const {
    id,
    name,
    title,
    phone,
    email,
    animal,
    startDate,
    salary,
    location,
    department,
    skills,
  } = props;
  //----------------------
  const [isEditing, setIsEditing] = useState(false); //ollaanko muokaamassa. Controls whether the fields are in editable mode or view mode.
  const [person, setPerson] = useState({
    //person stores the editable version of employee fields.If editing is enabled, inputs modify this state.
    salary,
    location,
    department,
    skills: Array.isArray(skills) ? skills.join(", ") : skills, //1. Проверява дали skills е масив (array).
    //Ако skills е масив → връща true
    //Ако skills не е масив (например вече е стринг или undefined) → връща false
    // 2.  ? skills.join(", ")
    //Ако е масив, използва .join(", ") за да превърне масива в стринг, като отделя елементите със запетая и интервал.
  });
  //----------------------
  const [savedMessage, setSavedMessage] = useState(""); // за визуално потвърждение
  //----------------------------
  const update = (
    url = "https://hrapp-mock-api.onrender.com/api/employees",
    body = {},
    headers = {} //A utility function used to send PATCH requests.
  ) => _patch(url, body, { headers });

  const handleInputChange = (e) => {
    //Updates individual fields inside the person state.
    const { name, value } = e.target; //The name attribute of the input determines which property updates.
    setPerson((prevState) => ({ ...prevState, [name]: value }));
  };
  //kenen henkilön
  const handleEdit = () => {
    update(`https://hrapp-mock-api.onrender.com/api/employees/${id}`, person) //Sends updated employee data to JSON server.
      //---------------------
      .then(() => {
        setSavedMessage("✅ Changes saved!");
        setTimeout(() => setSavedMessage(""), 2000); // съобщението изчезва след 2 сек
        //___________________________
      })
      //--------------------------------------------
      .catch(() => {
        setSavedMessage("❌ Error saving changes");
        setTimeout(() => setSavedMessage(""), 2000);
      });
  };
  //----------------
  // const handleCancel = () => {
  //   setPerson({
  //     salary: props.salary,
  //     location: props.location,
  //     department: props.department,
  //     skills: Array.isArray(props.skills)
  //       ? props.skills.join(", ")
  //       : props.skills,
  //   });
  //   setIsEditing(false);
  //   //------------------------
  // };

  const handleCancel = () => {
    setPerson({
      salary,
      location,
      department,
      skills,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios
        .delete(`https://hrapp-mock-api.onrender.com/api/employees/${id}`)
        .then(() => {
          setSavedMessage("🗑 Employee deleted!");
          setTimeout(() => setSavedMessage(""), 2000);

          // премахваме картата от списъка в UI
          if (props.setEmployees && props.employees) {
            props.setEmployees(props.employees.filter((e) => e.id !== id));
          }
        })
        .catch((error) => {
          console.log("DELETE error:", error);
          setSavedMessage("❌ Error deleting employee");
          setTimeout(() => setSavedMessage(""), 2000);
        });
    }
  };

  //-------------------------------------------
  const renderEditableField = (value, name) => {
    //Function for displaying or editing a field
    const capitalizeWords = (text) =>
      text.toString().replace(
        /\w\S*/g, //Намери дума, която започва с буква/цифра и продължава до следващия интервал.
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() //Converts input text into "Title Case".
        //Uses the regex to find words.
      );
    const displayValue = value ? capitalizeWords(value) : "N/A"; //Create display value:
    const displayName = name ? capitalizeWords(name) : "N/A";

    return isEditing ? (
      //   <input value={value || ""} name={name} onChange={handleInputChange} /> //If editing → show <input>;If not editing → show read-only text:
      // ) : (
      //   <p>
      //     {displayName}: {displayValue}
      //   </p>
      // );

      <TextField
        label={displayName}
        name={name}
        value={value || ""}
        onChange={handleInputChange}
        fullWidth
        margin="dense"
      />
    ) : (
      <Typography variant="body1" sx={{ mr: 1 }}>
        {displayName}: {displayValue}
      </Typography>
    );
  };

  return (
    // <div className={styles["person-card"]}>
    //   {/*<h2>{props.name}</h2>*/}
    //   <p>Name: {props.name}</p>
    //   <p>Title: {props.title}</p>
    //   <p>Phone: {props.phone}</p>
    //   <p>Email: {props.email}</p>
    //   <p>Animal: {props.animal}</p>
    //   <p>StartDate: {props.startDate}</p>
    //   <p>
    //     Service Years: {serviceYears} {reminderMessage}
    //   </p>
    //   {renderEditableField(person.salary, "salary")}
    //   {renderEditableField(person.location, "location")}
    //   {renderEditableField(person.department, "department")}
    //   {renderEditableField(person.skills, "skills")}

    <CardMUI
      sx={{
        backgroundColor: "white",
        color: "black",
        fontSize: "0.5em",
        width: 250, // фиксирана ширина
        height: 350, // фиксирана височина
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // съдържанието започва отгоре
        borderRadius: 2, // MUI използва числа вместо px (2 ~ 16px)
        boxShadow: 3, // MUI shadow preset, може да се нагласи
        padding: 2, // MUI spacing, 2 = 16px
        paddingTop: 1.5, // padding-top ~ 32px
        boxSizing: "border-box",
      }}
    >
      <CardContent sx={{ flex: 1, overflowY: "auto" }}>
        <Typography variant="h6">Name: {name}</Typography>
        <Typography variant="body1">Title: {title}</Typography>
        <Typography variant="body1">Phone: {phone}</Typography>
        <Typography variant="body1">Email: {email}</Typography>
        <Typography variant="body1">Animal: {animal}</Typography>
        <Typography variant="body1">StartDate: {startDate}</Typography>
        <Typography variant="body1">
          Service Years: {serviceYears} {reminderMessage}
        </Typography>
        {renderEditableField(person.salary, "salary")}
        {renderEditableField(person.location, "location")}
        {renderEditableField(person.department, "department")}
        {renderEditableField(person.skills, "skills")}
      </CardContent>

      {/* <div className={styles["person-card-buttons"]}> */}

      {/* Cancel бутон се показва само в режим на редакция */}
      {/* {isEditing && (
              <button onClick={handleCancel} style={{ marginRight: "10px" }}>
                Cancel
              </button>
            )}

            <button
              onClick={() => {
                if (isEditing) handleEdit();
                setIsEditing((prev) => !prev);
              }}
            >
              {isEditing ? "Save" : "Edit"}
            </button> */}

      {/* Delete Button */}
      {/* <button
              onClick={handleDelete}
              style={{
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Delete
            </button> */}
      {/* Визуално потвърждение */}
      {/* {savedMessage && (
              <p style={{ color: "green", marginTop: "5px" }}>{savedMessage}</p>
            )} */}
      {/* </div>
            </div>
              );
            }; */}

      <CardActions
        sx={{
          display: "flex",
          // flexWrap: "wrap",
          justifyContent: "center",
          gap: 0.5,
          flexShrink: 0, // не позволява бутоните да се свиват
        }}
      >
        {isEditing && (
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        )}

        <Button
          variant="contained"
          onClick={() => {
            if (isEditing) handleEdit();
            setIsEditing((prev) => !prev);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>

        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>

      {savedMessage && (
        <Typography
          variant="body2"
          sx={{
            color: savedMessage.includes("❌") ? "error.main" : "success.main",
            m: 2,
          }}
        >
          {savedMessage}
        </Typography>
      )}
    </CardMUI>
  );
};

export default PersonCard;
