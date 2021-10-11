import "./styles.css";
import title from "./img/title.png";
import Resource from "./components/resources";

export default function App() {
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
            <h1 style={{ fontFamily: "Poppins, sans-serif" }}>
              Coding Chrysanthemums
            </h1>
          </b>
          <h4 style={{ fontFamily: "Georgia" }}>
            <i>Resources for Coding from scratch</i>
          </h4>
        </div>
        <img
          src={title}
          width="200px"
          alt="title"
          style={{ transform: "translateY(-10%)" }}
        />
      </div>
      <Resource />
    </div>
  );
}
