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
import Womentors from "../routes/womentors";
import Gallery from "../routes/projectgallery";
import Opportunities from "../routes/opportunities";
const Navi = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
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
                  <Nav.Link as={NavLink} to="/dsa">
                    DSA
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/webdev">
                    Web Dev
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/ai">
                    AI/ML
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/womentors">
                    Womentors
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/gallery">
                    Gallery
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/opportunities">
                    Opportunities
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <App />
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
            <Route path="/womentors">
              <Womentors></Womentors>
            </Route>
            <Route path="/gallery">
              <Gallery/>
            </Route>
            <Route path="/opportunities">
              <Opportunities></Opportunities>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};
export default Navi;
