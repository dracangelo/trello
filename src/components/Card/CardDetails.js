import React from 'react';
import CommentSection from './CommentSection';
import FileUpload from './Attachments/FileUpload';

const CardDetails = ({ card }) => {
  return (
    <div className="card-details">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <FileUpload cardId={card.id} />
      <CommentSection cardId={card.id} comments={card.comments} />
    </div>
  );
};

export default CardDetails;
