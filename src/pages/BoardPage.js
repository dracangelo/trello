import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import BoardList from '../components/Board/BoardList';
import CreateListModal from '../components/Board/Modals/CreateListModal';

const BoardPage = () => {
  const { id } = useParams();
  const { getBoardById } = useContext(AppContext);
  const board = getBoardById(id);

  return (
    <div className="board-page">
      <h2>{board.name}</h2>
      <div className="list-container">
        {board.lists.map(list => (
          <BoardList key={list.id} list={list} />
        ))}
      </div>
      <CreateListModal boardId={id} />
    </div>
  );
};

export default BoardPage;
