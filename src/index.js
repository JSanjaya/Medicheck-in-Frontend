import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css";
import { UserProvider } from "./components/UserContext"
import Header from "./components/partials/Header"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <Header />
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
