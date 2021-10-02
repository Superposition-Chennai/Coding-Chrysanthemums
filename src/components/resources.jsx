import { Card } from "@material-ui/core";
import dsa from "../img/CC images.png";
import web from "../img/CC images (1).png";
import ml from "../img/CC images (3).png";
export default function Resource() {
  return (
    <>
      <div
        style={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
      >
        <Card class="Card">
          <h3 style={{ fontFamily: "Poppins" }}>DSA</h3>
          <img src={dsa} alt="DSA" width="300px" />
        </Card>
        <Card class="Card">
          <h3 style={{ fontFamily: "Poppins" }}>Web Dev</h3>
          <img src={web} alt="Web" width="300px" />
        </Card>
        <Card class="Card">
          <h3 style={{ fontFamily: "Poppins" }}>AI/ML</h3>
          <img src={ml} alt="ML" width="300px" />
        </Card>
      </div>
    </>
  );
}
