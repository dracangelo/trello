import React from 'react';

const BoardHeader = ({ board }) => {
  if (!board) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="board-header">
      <h2>{board.name}</h2>
    </div>
  );
};

export default BoardHeader;
