import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HabitContextProvider from './contexts/HabitContextProvider';
import PeriodContextProvider from './contexts/PeriodProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';
import memoryHabitService from './service/memoryHabitService';
import setupDayjs from './setupDayjs';

setupDayjs();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <PeriodContextProvider>
      <HabitContextProvider habitService={memoryHabitService}>
        <App />
      </HabitContextProvider>
    </PeriodContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
