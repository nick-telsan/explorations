import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Incrementer } from "./incrementer.tsx";

const roots = document.querySelectorAll(`[id^=react--]`);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Incrementer />
  </React.StrictMode>
);

roots.forEach((root) => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App id={root.id} />
    </React.StrictMode>
  );
});
