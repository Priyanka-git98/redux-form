import React, { useState, useEffect } from 'react';

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Pagination,
  AppBar,
  Toolbar,
} from '@mui/material';
import axios from 'axios';
import Cart from './Cart';

function ViewPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); 
  const [cart, setCart] = useState([]);

  const removeFromCart = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const checkout = () => {
    const confirmed = window.confirm('Confirm your purchase and proceed to checkout?');

    if (confirmed) {
      alert('Checkout complete. Thank you for your purchase!');
      setCart([]); 
    }
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Container>
        <AppBar position="static">
        <Toolbar>
          <Container>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Container>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" align="center" gutterBottom>
        List of Posts
      </Typography>
      <Grid container spacing={3}>
        {currentPosts.map(post => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {post.title}
                </Typography>
                <Typography color="textSecondary">
                  User ID: {post.userId}
                </Typography>
                <Typography variant="body2">
                  {post.body}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(post)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(filteredPosts.length / postsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
       <Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
    </Container>
  );
}

export default ViewPage;