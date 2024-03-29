import React from "react";
import ReactDOM from "react-dom/client";
import { LoadingProvider } from "./contexts/LoadingContext";
import { UserProvider } from "./contexts/UserContext";
import "./global.scss";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "./Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </LoadingProvider>
  </React.StrictMode>
);

reportWebVitals();
