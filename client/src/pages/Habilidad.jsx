import React from "react";


const skills = [
  { name: "React.js", image: "./images/react-original.png" },
  { name: "Vue.js", image: "./images/vuejs-original.png" },
  { name: "Javascript", image: "./images/Javascript.png" },
  { name: "HTML", image: "./images/html5-original.png" },
  { name: "CSS", image: "./images/css3-original.png" },
  // { name: "Node.js", image: "./Nodejs.png" },
  { name: "MySQL", image: "./images/mysql-original-wordmark.png" },
  { name: "Sequelize", image: "./images/sequelize-plain.png" },
  { name: "Postman", image: "./images/Postman.png" },
  { name: "GitHub", image: "./images/github-original.png" },
  { name: "Git", image: "./images/git-plain.png" },
];

export default function Habilidad() {
  return (
    <>
      <div className="skill_name">
        <h1>Hard Skills</h1>
      </div>
      <div className="Hard_skills_container">
        {skills.map((skill, index) => (
          <div key={index} className="Hard_skill">
            <p>{skill.name}</p>
            <img src={skill.image} alt={skill.name} className="Skills" />
          </div>
        ))}
      </div>
      <img src="./images/skill.jpeg" alt="DeskHome_art 2" className="DesckHome_art_2" />
    </>
  );
}
