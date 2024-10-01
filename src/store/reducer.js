const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        boards: state.boards.map(board => 
          board.id === action.payload.boardId 
          ? { ...board, lists: [...board.lists, action.payload.list] } 
          : board
        ),
      };
      case 'ADD_BOARD':
        console.log("Current boards before adding:", state.boards); // Debugging log
        return {
          ...state,
          boards: [...state.boards, action.payload],
        };
      
    default:
      return state;
  }
};

export default reducer;
