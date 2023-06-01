import React from 'react';
import ReactDOM from 'react-dom/client';
import HabitTracker from 'HabitTracker';
import ModalProvider from 'contexts/ModalContextProvider';
import PeriodProvider from 'contexts/PeriodContextProvider';
import HabitProvider from 'contexts/HabitContextProvider';
import ModalPortal from 'components/Modal/ModalPortal';
import './setupDayjs.ts';

import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HabitProvider>
      <PeriodProvider>
        <ModalProvider>
          <ModalPortal />
          <HabitTracker />
        </ModalProvider>
      </PeriodProvider>
    </HabitProvider>
  </React.StrictMode>,
);
