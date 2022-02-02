import { StrictMode, React } from "react";
import ReactDom from "react-dom";
import App from "./App.jsx"
import "./index.css"

ReactDom.render(<StrictMode><App></App></StrictMode>, document.getElementById("root"));
