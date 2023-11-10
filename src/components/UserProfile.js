import React, { useState, useRef } from 'react';
import { Avatar, Button, Typography, Grid, Divider, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from './Navbar';

const UserProfileContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const AvatarContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  '& .MuiAvatar-root': {
    width: 150, 
    height: 150, 
  },
}));

const UserProfileDetails = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(15),
}));

const ChangePhotoButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const UserProfile = ({ user, onPhotoChange }) => {
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
    <div>
    <Navbar/>
        <UserProfileContainer>
      <Grid container spacing={3}>
        <AvatarContainer item>
          <Avatar src={photo || user.avatar} alt={user.name} />
          <input type="file" accept="image/*" onChange={handlePhotoChange} ref={fileInputRef} style={{ display: 'none' }} />
          <ChangePhotoButton variant="contained" color="primary" onClick={handleUploadClick}>
            Upload Photo
          </ChangePhotoButton>
        </AvatarContainer>
        <UserProfileDetails item>
          <Typography variant="h4" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {user.email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: {user.phone}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Address: {user.address}
          </Typography>
        </UserProfileDetails>
      </Grid>
      <Divider />
    </UserProfileContainer>
    </div>
  );
}

export default UserProfile;
