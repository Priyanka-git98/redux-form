import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, InputBase, Avatar, Card, CardContent, CardMedia, CardActions, Button, Grid, Pagination
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function ViewPage() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=60')
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      })
      .catch((error) => console.error('Error fetching items: ', error));
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, items]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredItems.slice(startIndex, endIndex);

  const addToCart = (item) =>{
    setCart([...cart, item]);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping App
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            <Avatar alt="User Avatar" src="/path_to_user_avatar.jpg" />
          </div>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.url}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small" color="primary" onClick={ () => addToCart(item)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(filteredItems.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      /> 
    </div>
  );
}

export default ViewPage;
