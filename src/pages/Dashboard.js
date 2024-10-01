import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import CreateBoardModal from '../components/Board/Modals/CreateBoardModal';

const Dashboard = () => {
  const { boards } = useContext(AppContext);

  return (
    <div className="dashboard">
      <h2>Your Boards</h2>
      <div className="board-list">
        {boards.map(board => (
          <Link to={`/board/${board.id}`} key={board.id}>
            <div className="board-card">
              <h3>{board.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <CreateBoardModal />
    </div>
  );
};

export default Dashboard;
