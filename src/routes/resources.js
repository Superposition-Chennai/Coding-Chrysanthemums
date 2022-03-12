import "../styles.css";
import Resource from "../components/resources";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ResApp() {
  return (
    <div className="App">
      <div
        id="head"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          overflowY: "hidden",
          height: "max-content"
        }}
      >
        <div>
          <br />
          <b>
            <h2 style={{ fontFamily: "Poppins, sans-serif" }}>
              Resources for Beginners
            </h2>
            <h4>Getting started with Coding</h4>
            <h6>Want to add a resource here? Open a PR <a href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></h6>
          </b>
        </div>
      </div>
      <Resource />
    </div>
  );
}
