//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.scss";

//include bootstrap npm library into the bundle
import "bootstrap";

//import your own components
import SecCounter from "./component/seccounter";

//render your react application
ReactDOM.render(<SecCounter />, document.querySelector("#app"));
