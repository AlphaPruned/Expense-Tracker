import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./../public/styles.css";
import { domainToUnicode } from "url";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// ReactDOM.render(<h1>Expense-Tracker</h1>, document.getElementById("root"));