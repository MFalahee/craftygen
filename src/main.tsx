import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Existing import

// Add the following import
import "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
