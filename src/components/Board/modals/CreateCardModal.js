import React, { useState, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Button from '../../Common/Button';
import InputField from '../../Common/InputField';

const CreateCardModal = ({ listId }) => {
  const { addCard } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addCard(listId, title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="create-card-modal">
      <h3>Create Card</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Card Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputField
          label="Card Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" text="Create Card" />
      </form>
    </div>
  );
};

export default CreateCardModal;
