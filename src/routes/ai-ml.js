import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "@material-ui/core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import title from "../img/Software engineer-cuate.png";
export default function AIML() {
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
          <h1>AI and ML Resources</h1>
          <img src={title} alt="title" width="200px" />
          <div className="list">
            <div className="item">
              <Card className="Card1">
                <h4>DS Collection</h4>
                <p>
                  Geeks for Geeks{" "}
                  <a href="https://www.geeksforgeeks.org/data-structures">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Algo Collection</h4>
                <p>
                  Geeks for Geeks{" "}
                  <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Learn DSA</h4>
                <p>
                  Programiz{" "}
                  <a href="https://www.programiz.com/dsa">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Algorithms Notes</h4>
                <p>
                  GoalKicker{" "}
                  <a href="https://books.goalkicker.com/AlgorithmsBook/">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>DSA with Java</h4>
                <p>
                  Community Classroom{" "}
                  <a href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>C++ Algorithms</h4>
                <p>
                  The Algorithms{" "}
                  <a href="https://github.com/TheAlgorithms/C-Plus-Plus/">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Python Algorithms</h4>
                <p>
                  The Algorithms{" "}
                  <a href="https://github.com/TheAlgorithms/Python/">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </p>
              </Card>
            </div>
            <div className="item">
              <Card className="Card1">
                <h4>Java Algorithms</h4>
                <p>
                  The Algorithms{" "}
                  <a href="https://github.com/TheAlgorithms/Java/">
                    <FontAwesomeIcon icon={faGithub} />
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
