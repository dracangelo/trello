import React, { createContext, useReducer } from 'react';
import reducer from '../store/reducer';

export const AppContext = createContext();

const initialState = {
  boards: [
    { id: '1', name: 'Sample Board', lists: [] }
  ],
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBoard = (name) => {
    const newBoard = { id: Date.now().toString(), name, lists: [] };
    console.log("Adding board:", newBoard); // Debugging log
    dispatch({ type: 'ADD_BOARD', payload: newBoard });
  };
  

  const addList = (boardId, name) => {
    const newList = { id: Date.now().toString(), name, cards: [] };
    dispatch({ type: 'ADD_LIST', payload: { boardId, list: newList } });
  };

  const getBoardById = (id) => {
    return state.boards.find(board => board.id === id);
  };

  return (
    <AppContext.Provider value={{ boards: state.boards, addBoard, addList, getBoardById }}>
      {children}
    </AppContext.Provider>
  );
};
