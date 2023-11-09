import React, { useState, useRef } from 'react';
import { Avatar } from '@mui/material';

function UserProfile({ user, onPhotoChange }) {
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    if (selectedPhoto) {
      setPhoto(URL.createObjectURL(selectedPhoto));
      onPhotoChange(selectedPhoto); 
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="user-profile-container">
      <div className="avatar-container">
        <Avatar src={photo || user.avatar} alt={user.name} />
        <input type="file" accept="image/*" onChange={handlePhotoChange} ref={fileInputRef} style={{ display: 'none' }} />
      </div>
      <div className="user-details">
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <button onClick={handleUploadClick}>Change Photo</button>
      </div>
    </div>
  );
}

export default UserProfile;
