import { Navbar, Nav, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Button, CssBaseline, Menu, MenuItem, Switch as DarkModeSwitch} from '@mui/material';
import { useState } from "react";
import logo from "../img/webdev.png";
import DSA from "../routes/dsa.js";
import AIML from "../routes/ai-ml.js";
import WebDev from "../routes/webdev.js";
import App from "../App";
import Gallery from "../routes/projectgallery";
import Opportunities from "../routes/opportunities";
import Hackathons from "../routes/hackathons";
import Communities from "../routes/communities";
import Inspiration from "../routes/inspiration";
import Quiz from "../routes/quiz";
import BottomNav from "./bottomnav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink, purple } from "@mui/material/colors";
import { DarkMode, DarkModeTwoTone, LightMode, LightModeTwoTone } from "@mui/icons-material";

// Define theme settings
const light = createTheme( {
    mode: "light",
    palette:{
      background:{
        default: pink[100],
      }
    }
});

const dark = createTheme({
  palette:{
    mode: "dark",
    background:{
      default:pink[700]
    }
  }
});

const Navi = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <div>
        <Router>
          <Navbar variant={isDarkTheme ? "dark":"light"} bg={isDarkTheme ? "dark":"light"} expand="lg" sticky="top" className="navibar">
            <CssBaseline/>
            <Container>
              <Navbar.Brand as={NavLink} to="/">
                <img
                  src={logo}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="CC logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
                    Resources
                  </Nav.Link>
                  <Menu id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  ><Link to="/dsa" style={isDarkTheme ? {color:"#fff"}:{color:"#000"}} id="basic-menu">DSA</Link></MenuItem>
        <MenuItem ><Link to="/webdev" style={isDarkTheme ? {color:"#fff"}:{color:"#000"}}  id="basic-menu">Web Dev</Link></MenuItem>
        <MenuItem ><Link to="/ai"style={isDarkTheme ? {color:"#fff"}:{color:"#000"}}  id="basic-menu">AI</Link></MenuItem>
        </Menu>
                  <Nav.Link as={NavLink} to="/opportunities">
                    Opportunities
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/hackathons">
                    Hackathons
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/communities">
                    Communities
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/gallery">
                    Gallery
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/inspiration">
                    Get Inspired
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <DarkModeSwitch checkedIcon={<DarkModeTwoTone sx={{background:purple[200], borderRadius:"50%", padding:"2px"}} htmlColor="#000"/>} icon={<LightModeTwoTone  sx={{background:purple[600], borderRadius:"50%", padding:"2px"}} htmlColor="#fff"/>} sx={{position:"fixed", top:10, right:30, zIndex:10000}} className="darkswitch" color="secondary" checked={isDarkTheme} onChange={changeTheme} />
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
            <Route path="/gallery">
              <Gallery/>
            </Route>
            <Route path="/opportunities">
              <Opportunities/>
            </Route>
            <Route path="/hackathons">
              <Hackathons/>
            </Route>
            <Route path="/communities">
              <Communities/>
            </Route>
            <Route path="/inspiration">
              <Inspiration/>
            </Route>
            <Route path="/quiz">
              <Quiz/>
            </Route>
          </Switch>
        </Router>
        <BottomNav/>
      </div>
    </ThemeProvider>
  );
};
export default Navi;
