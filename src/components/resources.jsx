import { Card } from "@mui/material";
import dsa from "../img/CC images.png";
import web from "../img/CC images (1).png";
import ml from "../img/CC images (3).png";
import { Link } from "react-router-dom";
export default function Resource() {
  return (
    <>
      <div className="list res"
        style={{
          justifyContent: "space-evenly",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Link to="/dsa" className="link">
          <Card  className="Card">
          <h5 style={{ fontWeight:"900",fontFamily: "Poppins, sans-serif", textDecorationLine: "underline", textDecorationStyle: "wavy" }}>DSA</h5>
            <img src={dsa} alt="DSA" width="250px" />
          </Card>
        </Link>
        <Link to="/webdev" className="link">
          <Card  className="Card">
          <h5 style={{ fontWeight:"900",fontFamily: "Poppins, sans-serif", textDecorationLine: "underline", textDecorationStyle: "wavy" }}>Web Dev</h5>
            <img src={web} alt="Web" width="250px" />
          </Card>
        </Link>
        <Link to="/ai" className="link">
          <Card  className="Card" >
          <h5 style={{ fontWeight:"900",fontFamily: "Poppins, sans-serif", textDecorationLine: "underline", textDecorationStyle: "wavy" }}>AI/ML</h5>
            <img src={ml} alt="ML" width="250px" />
          </Card>
        </Link>
      </div>
    </>
  );
}
