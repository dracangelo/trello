import React from 'react';
import Card from '../Card/Card';
import CreateCardModal from '../Board/modals/CreateCardModal';
import ListHeader from './ListHeader';
import { useDragAndDrop } from '../hooks/useDragAndDrop';

const List = ({ list }) => {
  const { dragStart, dragOver, drop } = useDragAndDrop();

  return (
    <div
      className="list"
      onDragOver={dragOver}
      onDrop={(e) => drop(e, list.id)}
    >
      <ListHeader list={list} />
      <div className="list-cards">
        {list.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            dragStart={dragStart}
          />
        ))}
      </div>
      <CreateCardModal listId={list.id} />
    </div>
  );
};

export default List;
