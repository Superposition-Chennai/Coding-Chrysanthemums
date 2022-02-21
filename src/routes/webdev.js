import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@material-ui/core";
import { faBook, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import title from "../img/Software engineer-cuate.png";
import CardRes from "./cardres";
export default function WebDev() {
  const resources = [
    {title: "Web Dev Roadmap", name: "Roadmap.sh", link:"https://roadmap.sh/" },
    {title: "Web Dev Collection", name: "GeeksforGeeks", link:"https://www.geeksforgeeks.org/web-development/" },
    {title: "Web Dev Courses", name: "freeCodeCamp", link:"https://www.freecodecamp.org/learn/" },
    {title: "JavaScript Course", name: "Codecademy", link:"https://www.codecademy.com/learn/introduction-to-javascript" },
    {title: "Eloquent JavaScript", name: "Marijn Haverbeke", link:"https://eloquentjavascript.net/" },
    {title: "Web Dev Courses", name: "W3 Schools", link:"https://www.w3schools.com/" },
  ];
  return (
    <>
      <div
        className="App"
        id="head"
        style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            margin: "1%"
          }}
        >
          <h1>Web Dev Resources</h1>
          <img src={title} alt="title" width="200px" />
          <div className="list">
            {resources.map(CardRes)}
          </div>
        </div>
      </div>
    </>
  );
}
