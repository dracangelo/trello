import React, { useContext, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

const CreateBoardModal = () => {
  const { addBoard } = useContext(AppContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addBoard(name);
      setName('');
    }
  };

  return (
    <div className="create-board-modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Board Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Create Board</button>
      </form>
    </div>
  );
};

export default CreateBoardModal;
