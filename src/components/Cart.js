import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';


function Cart({ cart, removeFromCart, checkout }) {
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Cart
        </Typography>
        <List>
          {cart ? (
            cart.map(item => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.title}
                  secondary={`User ID: ${item.userId}`}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </Button>
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              Your cart is empty.
            </Typography>
          )}
        </List>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={checkout}
        >
          Checkout
        </Button>
      </Container>
    );
  }
export default Cart;