import { HabitProvider } from 'contexts/HabitContextProvider';
import { RecordProvider } from 'contexts/RecordContextProvider';
import HabitTracker from 'HabitTracker';
import ReactDOM from 'react-dom/client';
import './Layout.css';
import './setupDayjs.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <HabitProvider>
    <RecordProvider>
      <HabitTracker />
    </RecordProvider>
  </HabitProvider>,
);
