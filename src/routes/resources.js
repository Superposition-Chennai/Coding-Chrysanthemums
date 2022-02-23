import "../styles.css";
import title from "../img/title.png";
import Resource from "../components/resources";

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
              Resources for Coding
            </h2>
          </b>
        </div>
      </div>
      <Resource />
    </div>
  );
}
