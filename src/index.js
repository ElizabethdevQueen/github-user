import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// require("dotenv").config();
// dev-t80p-j3l.us.auth0.com
// DQ5YZkg7NJ7axWE3avbVSoTonOnPLvbIDQ5YZkg7NJ7axWE3avbVSoTonOnPLvbI
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-t80p-j3l.us.auth0.com"
      clientId="DQ5YZkg7NJ7axWE3avbVSoTonOnPLvbI"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
