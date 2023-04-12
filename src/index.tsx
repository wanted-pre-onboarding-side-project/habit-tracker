import React from "react";
import ReactDOM from "react-dom/client";
import HabitTracker from "HabitTracker";
import { ModalProvider } from "contexts/ModalContextProvider";
import { RecordProvider } from "contexts/RecordContextProvider";

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
