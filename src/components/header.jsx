import { Navbar, Nav, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from "react-router-dom";

import logo from "../img/webdev.png";
import DSA from "../routes/dsa.js";
import AIML from "../routes/ai-ml.js";
import WebDev from "../routes/webdev.js";
import App from "../App";
import Gallery from "../routes/projectgallery";
import Opportunities from "../routes/opportunities";
import Hackathons from "../routes/hackathons";
import ResApp from "../routes/resources";
import Communities from "../routes/communities";
import WallofFame from "../routes/walloffame";
const Navi = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar variant="light" bg="light" expand="lg" sticky="top" className="navibar">
            <Container>
              <Navbar.Brand as={NavLink} to="/">
                <img
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand as={NavLink} to="/">Coding Chrysanthemums</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/resources">
                    Resources
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/gallery">
                    Gallery
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/opportunities">
                    Opportunities
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/hackathons">
                    Hackathons
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/communities">
                    Communities
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/wof">
                    Wall of Fame
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/resources">
              <ResApp />
            </Route>
            <Route path="/dsa">
              <DSA />
            </Route>
            <Route path="/webdev">
              <WebDev />
            </Route>
            <Route path="/ai">
              <AIML />
            </Route>
            <Route path="/gallery">
              <Gallery/>
            </Route>
            <Route path="/opportunities">
              <Opportunities></Opportunities>
            </Route>
            <Route path="/hackathons">
              <Hackathons/>
            </Route>
            <Route path="/communities">
              <Communities/>
            </Route>
            <Route path="/wof">
              <WallofFame/>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};
export default Navi;
