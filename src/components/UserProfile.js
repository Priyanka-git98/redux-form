import React, {useState} from 'react';
import { Dialog, DialogTitle, DialogContent, Avatar, Typography, Button } from '@mui/material';

const UserProfile = ({ open, onClose, user, onAvatarChange }) => {
    const [newAvatar, setNewAvatar] = useState(user.avatarSrc);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setNewAvatar(e.target.result);
          };
          reader.readAsDataURL(file);
          onAvatarChange(event.target.result);
        }
      };

  
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User Profile</DialogTitle>
      <DialogContent>
        <Avatar alt="User Avatar" src={newAvatar} sx={{ width: 100, height: 100, marginBottom: 2 }} />
        <input type="file" accept="image/*" id="avatar-upload" style={{ display: 'none' }} onChange={handleAvatarChange} />
        <label htmlFor="avatar-upload">
          <Button variant="contained" component="span">
            Change Profile Photo
          </Button>
        </label>
        <Typography variant="h6" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {user.email}
        </Typography>
        <Typography variant="body1">
          Phone: {user.phone}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;