import React, { useContext } from 'react';
import Button from '../Common/Button';
import { AppContext } from '../../context/AppContext';

const ListHeader = ({ list }) => {
  const { deleteList } = useContext(AppContext);

  const handleDeleteList = () => {
    if (window.confirm(`Are you sure you want to delete the list "${list.name}"?`)) {
      deleteList(list.id); // Call the delete function from context
    }
  };

  return (
    <div className="list-header">
      <h4>{list.name}</h4>
      <Button text="Delete List" onClick={handleDeleteList} />
    </div>
  );
};

export default ListHeader;
