import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./components/header";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Navi />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
