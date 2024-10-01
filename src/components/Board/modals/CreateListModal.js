import React, { useState, useContext } from 'react';
import { AppContext } from '../../../context/AppContext'; 
import Button from '../../Common/Button';
import InputField from '../../Common/InputField';

const CreateListModal = ({ boardId }) => {
  const { addList } = useContext(AppContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addList(boardId, name);
      setName('');
    }
  };

  return (
    <div className="create-list-modal">
      <h3>Create List</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          label="List Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" text="Create List" />
      </form>
    </div>
  );
};

export default CreateListModal;
