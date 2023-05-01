import { ALL_DAYS } from 'constant';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>habit name</th>
        {ALL_DAYS.map((DAY) => (
          <th key={DAY}>{DAY}</th>
        ))}
        <th>achieve rate</th>
      </tr>
    </thead>
  );
};

export default TableHead;
