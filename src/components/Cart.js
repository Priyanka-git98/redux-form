import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, checkoutCart } from '../redux/action';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Snackbar,
} from '@mui/material';


function Cart({ cart, removeFromCart, checkoutCart }) {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleCheckout = () => {
    checkoutCart();
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

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
        onClick={handleCheckout}
      >
          Checkout
        </Button>
        <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Checkout successful!"
      />
      </Container>
    );
  }
  const mapStateToProps = (state) => ({
    cart: state.cart.cartItems,
  });
  
  const mapDispatchToProps = {
    removeFromCart,
    checkoutCart,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);