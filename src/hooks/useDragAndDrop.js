import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useDragAndDrop = () => {
  const { moveCard } = useContext(AppContext);
  const [draggedCardId, setDraggedCardId] = useState(null);

  const dragStart = (e, cardId) => {
    setDraggedCardId(cardId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const drop = (e, listId) => {
    e.preventDefault();
    moveCard(draggedCardId, listId);
  };

  return { dragStart, dragOver, drop };
};
