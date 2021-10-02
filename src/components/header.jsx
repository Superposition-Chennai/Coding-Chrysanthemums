import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/Insta posts (4).png";
const Navi = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Coding Chrysanthemums</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#DSA">DSA</Nav.Link>
            <Nav.Link href="#WebDev">Web Dev</Nav.Link>
            <Nav.Link href="#AI/ML">AI/ML</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navi;
