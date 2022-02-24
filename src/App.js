import "./styles.css";
import title from "./img/title.png";
import {Card, CardActionArea} from "@material-ui/core";
import { Link } from "react-router-dom";

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
            <Link to="/resources" className="link">
            <h5>Resources</h5>
            </Link>
            <p>Find resources that help you start out with Coding</p>
          </Card>
          
          <Card className="Card">
            <Link to="/opportunities" className="link"><h5>Opportunities</h5></Link>
            <p>Find Scholarships,  Fellowships, and many more</p>
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
        <Link to="/gallery" className="link"><h5>Project Gallery</h5></Link>
          <p>View some cool projects and submit yours too :D</p>
        </Card>
        </div>
        </div>
        <div id="homepage">
        <Card className="masterc Card">
        <Link to="/communities" className="link"><h5>Communities</h5></Link>
          <p>Check out some amazing Womxn-in-Tech communities to join</p>
        </Card>
        </div>
        </div>
        <footer id="foot"><p>Made with ❤️ by <span style={{textDecorationLine:"underline",textDecorationStyle:"wavy"}}>Rakshaa Viswanathan</span></p></footer>
        </div>
      
  );
}
