import React from "react";
import ReactDOM from "react-dom/client";
import HabitTracker from "HabitTracker";
import { ModalProvider } from "contexts/ModalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <HabitTracker />
    </ModalProvider>
  </React.StrictMode>
);
