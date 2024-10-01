import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../Common/Button';
import LoadingSpinner from '../../Common/LoadingSpinner';

const FileUpload = ({ cardId }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    setUploading(true);
    try {
      await axios.post(`/api/cards/${cardId}/upload`, formData);
      setFile(null);
      setUploading(false);
    } catch (err) {
      setError('File upload failed. Please try again.');
      setUploading(false);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      {uploading ? <LoadingSpinner /> : <Button text="Upload" onClick={handleUpload} />}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FileUpload;
