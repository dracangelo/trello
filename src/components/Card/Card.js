import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className="card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h4>{card.title}</h4>
          <p>{card.description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
