import React from "react";
import ReactDOM from "react-dom/client";
import HabitTracker from "HabitTracker";
import { ModalProvider } from "contexts/ModalContext";
import { RecordProvider } from "contexts/RecordContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecordProvider>
      <ModalProvider>
        <HabitTracker />
      </ModalProvider>
    </RecordProvider>
  </React.StrictMode>
);
