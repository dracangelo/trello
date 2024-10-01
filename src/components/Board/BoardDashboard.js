// BoardDashboard.js
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext'; // Adjust the path if necessary
import Board from './Board'; // Import your Board component
import CreateBoardModal from './modals/CreateBoardModal'; // Import your modal for creating new boards

const BoardDashboard = () => {
  const { boards } = useContext(AppContext); // Use the context to get boards

  return (
    <div className="board-dashboard">
      <h1>Your Boards</h1>
      <CreateBoardModal /> {/* Modal to create new boards */}
      <div className="board-list">
        {boards.map((board) => (
          <Board key={board.id} board={board} /> // Render each board
        ))}
      </div>
    </div>
  );
};

export default BoardDashboard;
