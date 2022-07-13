import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "./Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

reportWebVitals();
