import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Board from './Board'; // Adjust path as necessary

const BoardList = () => {
  const { boards } = useContext(AppContext);

  return (
    <div className="board-list">
      {boards.map((board) => (
        <Board key={board.id} board={board} />
      ))}
    </div>
  );
};

export default BoardList;
