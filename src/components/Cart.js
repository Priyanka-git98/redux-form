import React from 'react';
import { AppBar, Container, Toolbar, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';

const Cart = ({ cart, removeFromCart }) => {
  

  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Your Cart
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ marginTop: 2 }}>
        <List>
          {cart.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <Button variant="contained" color="secondary" onClick={() => removeFromCart(item)}>
                  Remove
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary" fullWidth>
          Proceed to Checkout
        </Button>
      </Container>
    </div>
  );
};

export default Cart;