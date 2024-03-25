import React from "react";


const skills = [
  { name: "React.js", image: "./public/images/react-original.png" },
  { name: "Vue.js", image: "./public/images/vuejs-original.png" },
  { name: "Javascript", image: "./public/images/Javascript.png" },
  { name: "HTML", image: "./public/images/html5-original.png" },
  { name: "CSS", image: "./public/images/css3-original.png" },
  // { name: "Node.js", image: "./Nodejs.png" },
  { name: "MySQL", image: "./public/images/mysql-original-wordmark.png" },
  { name: "Sequelize", image: "./public/images/sequelize-plain.png" },
  { name: "Postman", image: "./public/images/Postman.png" },
  { name: "GitHub", image: "./public/images/github-original.png" },
  { name: "Git", image: "./public/images/git-plain.png" },
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
      <img src="./public/images/skill.jpeg" alt="DeskHome_art 2" className="DesckHome_art_2" />
    </>
  );
}
