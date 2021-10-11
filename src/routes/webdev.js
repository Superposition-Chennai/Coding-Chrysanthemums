import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@material-ui/core";
import { faBook, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import title from "../img/Software engineer-cuate.png";
export default function WebDev() {
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
            <div className="item">
              <Card className="Card1">
                <h4>Frontend Roadmap</h4>
                <p>
                  Roadmap.sh{" "}
                  <a href="https://roadmap.sh/frontend">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Web Dev Collection</h4>
                <p>
                  Geeks for Geeks{" "}
                  <a href="https://www.geeksforgeeks.org/web-development/">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Backend Roadmap</h4>
                <p>
                  Roadmap.sh{" "}
                  <a href="https://roadmap.sh/backend">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>React Roadmap</h4>
                <p>
                  Roadmap.sh{" "}
                  <a href="https://roadmap.sh/react">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Web Dev Courses</h4>
                <p>
                  FreeCodeCamp{" "}
                  <a href="https://www.freecodecamp.org/learn/">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>JavaScript Course</h4>
                <p>
                  Codecademy{" "}
                  <a href="https://www.codecademy.com/learn/introduction-to-javascript">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Eloquent JavaScript</h4>
                <p>
                  Marijn Haverbeke{" "}
                  <a href="https://eloquentjavascript.net/">
                    <FontAwesomeIcon icon={faBook} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Web Dev Courses</h4>
                <p>
                  w3 Schools{" "}
                  <a href="https://www.w3schools.com/">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
