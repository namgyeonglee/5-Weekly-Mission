import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalsProvider } from "folder/modal/ModalsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </React.StrictMode>
);
