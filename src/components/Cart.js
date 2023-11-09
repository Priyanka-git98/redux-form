import React from 'react';
import {
  Card, CardContent, CardActions, Button, Grid, Typography
} from '@mui/material';

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
        Your Cart
      </Typography>
      {cart.length > 0 ? (
        <Grid container spacing={3}>
          {cart.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card style={{ height: '100%' }}>
                <CardContent>
                  <img src={item.url} alt={item.title} style={{ maxWidth: '100%' }} />
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove from Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2" color="textSecondary" component="p">
          Your cart is empty.
        </Typography>
      )}
      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
