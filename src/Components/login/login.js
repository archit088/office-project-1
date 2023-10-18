import * as React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Login() {
  return (
      <Box>
        <Navbar />
        <Paper
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="abcd@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
          <Button >Register</Button>


          <Typography
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Paper>
      </Box>
  );
}
