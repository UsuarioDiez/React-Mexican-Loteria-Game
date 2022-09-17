import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CurrentCardContext } from "./store/CurrentCardContexProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentCardContext>
      <App />
    </CurrentCardContext>
  </React.StrictMode>
);
