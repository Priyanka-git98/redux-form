import React, { useState, useEffect } from 'react';
import { AppBar, Container, Toolbar, Typography, InputBase, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Button, Badge, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Avatar, CircularProgress, ListItemAvatar } from '@mui/material';
import { Search, AddShoppingCart } from '@mui/icons-material';
import UserProfile from './UserProfile';

const ViewPage = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  

  const [currentUser, setCurrentUser] = useState({
    name: 'Pancy Lucina',
    email: 'pancy.lucina@mail.com',
    phone: '123-456-7890',
    avatarSrc: '/path-to-user-avatar.jpg',
  }); 

  useEffect(() => {
    // Fetch posts from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        // Fetch photos from JSONPlaceholder
        fetch('https://jsonplaceholder.typicode.com/photos')
          .then((response) => response.json())
          .then((photos) => {
            // Map photos to posts based on postId
            const postsWithPhotos = posts.map((post) => ({
              ...post,
              photo: photos.find((photo) => photo.id === post.id),
            }));
            setItems(postsWithPhotos);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching photos:', error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
        setLoading(false);
      });
  }, []);


  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCheckoutDialog = () => {
    setIsCheckoutDialogOpen(true);
  };

  const closeCheckoutDialog = () => {
    setIsCheckoutDialogOpen(false);
  };

  const handleCheckout = () => {
    setIsCheckoutSuccess(true);
    setCart([]);
    setIsCheckoutDialogOpen(false);
  };

  const closeCheckoutSuccess = () => {
    setIsCheckoutSuccess(false);
  };

  const openUserProfile = () => {
    setIsUserProfileOpen(true);
  };

  const closeUserProfile = () => {
    setIsUserProfileOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Shopping App
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <InputBase placeholder="Search..." />
                <IconButton color="inherit" aria-label="search">
                  <Search />
                </IconButton>
              </div>
              <IconButton color="inherit" aria-label="cart" onClick={openCart}>
                <Badge badgeContent={cart.length} color="error">
                  <AddShoppingCart />
                </Badge>
              </IconButton>
              <Avatar alt="User Avatar" src={currentUser.avatarSrc} sx={{ cursor: 'pointer' }} onClick={openUserProfile} />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ marginTop: 2 }}>
         {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {items.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar>
                  <img src={item.photo.url} alt={item.title} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.title} />
              <ListItemSecondaryAction>
                  <Button variant="contained" color="primary" onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
      </Container>
      <Dialog open={isCartOpen} onClose={closeCart}>
        <DialogTitle>Your Cart</DialogTitle>
        <DialogContent>
          <List>
            {cart.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={item.title} />
                <ListItemSecondaryAction>
                  <Button variant="contained" color="secondary" onClick={() => removeFromCart(item)}>
                    Remove
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeCart} color="primary">
            Close
          </Button>
          <Button color="primary" onClick={openCheckoutDialog}>
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isCheckoutDialogOpen} onClose={closeCheckoutDialog}>
        <DialogTitle>Confirm Checkout</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to proceed with the checkout?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeCheckoutDialog} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={handleCheckout}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={isCheckoutSuccess}
        autoHideDuration={6000}
        onClose={closeCheckoutSuccess}
        message="Checkout Successful!"
      />
      <UserProfile open={isUserProfileOpen} onClose={closeUserProfile} user={currentUser} /> 
    </div>
  );
};

export default ViewPage;