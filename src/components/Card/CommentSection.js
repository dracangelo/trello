import React, { useState, useContext } from 'react';
import Button from '../Common/Button';
import InputField from '../Common/InputField';
import { AppContext } from '../../context/AppContext';

const CommentSection = ({ cardId, comments }) => {
  const { addComment } = useContext(AppContext);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');

  const handleAddComment = () => {
    if (!newComment) {
      setError('Comment cannot be empty.');
      return;
    }
    addComment(cardId, newComment);
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <InputField
        label="Add a Comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <Button text="Add Comment" onClick={handleAddComment} />
    </div>
  );
};

export default CommentSection;
