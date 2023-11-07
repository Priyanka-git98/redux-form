import React from 'react';
import { Dialog, DialogTitle, DialogContent, Avatar, Typography } from '@mui/material';

const UserProfile = ({ open, onClose, user }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User Profile</DialogTitle>
      <DialogContent>
        <Avatar alt="User Avatar" src={user.avatarSrc} sx={{ width: 100, height: 100, marginBottom: 2 }} />
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