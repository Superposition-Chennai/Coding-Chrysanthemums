import { Card } from "@material-ui/core";
import dsa from "../img/CC images.png";
import web from "../img/CC images (1).png";
import ml from "../img/CC images (3).png";
import { Link } from "react-router-dom";
export default function Resource() {
  return (
    <>
      <div className="list"
        style={{
          justifyContent: "space-evenly",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Link to="/dsa">
          <Card  className="Card">
            <h3 style={{ fontFamily: "Poppins" }}>DSA</h3>
            <img src={dsa} alt="DSA" width="250px" />
          </Card>
        </Link>
        <Link to="/webdev">
          <Card  className="Card">
            <h3 style={{ fontFamily: "Poppins" }}>Web Dev</h3>
            <img src={web} alt="Web" width="250px" />
          </Card>
        </Link>
        <Link to="/ai">
          <Card  className="Card">
            <h3 style={{ fontFamily: "Poppins" }}>AI/ML</h3>
            <img src={ml} alt="ML" width="250px" />
          </Card>
        </Link>
      </div>
    </>
  );
}
