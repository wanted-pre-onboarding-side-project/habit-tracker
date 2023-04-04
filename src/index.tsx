import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HabitProvider } from './context/HabitContext';
import { PeriodProvider } from './context/PeriodContext';
import reportWebVitals from './reportWebVitals';
import { LocalStorageHabitManager } from './service/LocalStorageHabitManager';

const habitManager = new LocalStorageHabitManager();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <PeriodProvider>
        <HabitProvider habitManager={habitManager}>
          <App />
        </HabitProvider>
      </PeriodProvider>
    </ChakraProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
