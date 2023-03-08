import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import EditPage from "./pages/editPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <EditPage />
  </React.StrictMode>
);
