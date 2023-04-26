import './Layout.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import HabitTracker from 'HabitTracker';
import { ModalProvider } from 'contexts/ModalContextProvider';
import { RecordProvider } from 'contexts/RecordContextProvider';
import { HabitProvider } from 'contexts/HabitContextProvider';
import './setupDayjs.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <HabitProvider>
        <RecordProvider>
          <HabitTracker />
        </RecordProvider>
      </HabitProvider>
    </ModalProvider>
  </React.StrictMode>,
);
