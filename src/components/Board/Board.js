import React from 'react';
import BoardHeader from './BoardHeader';
import BoardList from './BoardList';
import CreateListModal from './modals/CreateListModal';

const Board = ({ board }) => {
  return (
    <div className="board">
      <BoardHeader board={board} />
      <div className="board-lists">
        {board?.lists?.map((list) => (
          <BoardList key={list.id} list={list} />
        )) || <div>No lists available</div>} {/* Handle empty lists */}
      </div>
      <CreateListModal boardId={board?.id} />
    </div>
  );
};

export default Board;
