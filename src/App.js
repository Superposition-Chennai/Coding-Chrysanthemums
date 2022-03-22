import "./styles.css";
import title from "./img/title.png";
import {Card} from "@mui/material";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

export default function App() {
  return (
    <div className="App home" style={{
      fontFamily: "Poppins",
      width: "100%",
      alignContent: "center",}}>
        <div className="masterhome">
        <div>
          <b>
            <h1 style={{ fontFamily: "Poppins, sans-serif" }}>
              Coding Chrysanthemums
            </h1>
          </b>
          <h4 style={{ fontFamily: "Georgia" }}>
            <i>One stop shop for Underrepresented Genders in Tech</i>
          </h4>
        </div>
        <div id="homepage">
        <div className="insidediv" >
          <Card className="Card">
            <Link to="/opportunities" className="link"><h5>Opportunities</h5></Link>
            <p>Find Scholarships,  Fellowships, and many more</p>
          </Card>
          <Card className="Card">
        <Link to="/communities" className="link"><h5>Communities</h5></Link>
          <p>Check out some amazing Womxn-in-Tech communities to join</p>
        </Card>
          </div>
          <img
              src={title}
              width="300px"
              alt="title"
            />
        <div className="insidediv">
          
        <Card className="Card">
        <Link to="/hackathons" className="link"><h5>Hackathons</h5></Link>
          <p>Find Diversity themed Hackathons to apply your learning</p>
        </Card>
        <Card className="Card">
        <Link to="/inspiration" className="link"><h5>Get Inspired</h5></Link>
          <p>Check out some amazing Womxn pioneers in Tech</p>
        </Card>
        </div>
        </div>
        </div>
        <footer id="foot"><p>Made with ❤️ by <Tooltip title="Founder, Superposition Chennai"><span style={{textDecorationLine:"underline",textDecorationStyle:"wavy"}}>Rakshaa Viswanathan</span></Tooltip></p></footer>
        </div>
      
  );
}
