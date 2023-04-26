import React from 'react';

const Popover = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div onClick={() => setIsOpen((prev) => !prev)}>
      <button>:</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Popover;
