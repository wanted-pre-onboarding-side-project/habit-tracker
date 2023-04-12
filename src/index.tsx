import React from "react";
import ReactDOM from "react-dom/client";
import HabitTracker from "HabitTracker";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HabitTracker />
  </React.StrictMode>
);
