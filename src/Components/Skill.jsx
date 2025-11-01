import { useState } from "react";

const Skill = ({ skills }) => {
  //   console.log(skills);
  //   console.log(skills.length);

  let [skillList, setSkillList] = useState(skills);
  console.log(skillList);
  console.log(skillList.length);

  let commaList = skillList.join(", ");
  console.log(commaList);

  return (
    <>
      <p>Skills: {commaList}</p>
    </>
  );
};
export default Skill;
