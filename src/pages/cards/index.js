// ** React Imports
import React, { useState } from 'react';

// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// ** Demo Components Imports
import CardUser from 'src/views/cards/CardUser';

// Sample data
const initialUserData = [
  { id: 1, name: 'User 1', description: 'Description for User 1' },
  { id: 2, name: 'User 2', description: 'Description for User 2' },
  { id: 3, name: 'User 3', description: 'Description for User 3' },
  { id: 4, name: 'User 4', description: 'Description for User 4' },
  // Add more user data as needed
];

const CardBasic = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', description: '' });

  const handleAddUserClick = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (prop) => (event) => {
    setNewUser({ ...newUser, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserId = userData.length ? userData[userData.length - 1].id + 1 : 1;
    const user = { id: newUserId, ...newUser };
    setUserData([...userData, user]);
    setNewUser({ name: '', description: '' });
    setShowForm(false);
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 4 }}>
        <Typography variant='h5'>Users</Typography>
        <Button variant="contained" color="primary" onClick={handleAddUserClick}>
          {showForm ? 'Cancel' : 'Add User'}
        </Button>
      </Grid>
      {showForm && (
        <Grid item xs={12}>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Name"
              value={newUser.name}
              onChange={handleInputChange('name')}
            />
            <TextField
              fullWidth
              label="Description"
              value={newUser.description}
              onChange={handleInputChange('description')}
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Grid>
      )}
      {userData.map(user => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <CardUser name={user.name} description={user.description} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardBasic;
