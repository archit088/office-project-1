/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Tab, Tabs, } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Image1 from '../../Assets/Images/image1.jpg'
import Login from './Login/Login';
import Signup from './Signup/Signup';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Auth() {
    const navigate = useNavigate()
    const location = useLocation()
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === 0){
            navigate('/login')
        }else{
            navigate('/signup')
        }
    }

  useEffect(()=>{
    if(location.pathname === '/signup'){
        setValue(1)
    }else{
        setValue(0)
    }
  },[location])

  return (
      <Box
        sx={{
          backgroundImage : `url(${Image1})`,
          height : '100vh',
          backgroundRepeat : 'no-repeat',
          backgroundSize : 'cover'
        }}
      >
        <Box
          sx={{
            height : '100vh',
            background : 'rgba(0,0,0,0.5)'
          }}
        >
          <Navbar />
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="94vh"
            spacing={2}
            >
            <Grid item md={4} sm={12} xs={12}>
              <Paper
                sx={{
                  mt : '20px',
                  p : '20px',
                  textAlign : 'center',
                  borderRadius : '15px'
                }}>
                  <Box
                    sx={{
                      backgroundColor : '#ccc',
                      borderRadius : '30px',
                      overflow : 'hidden'
                    }}
                  >
                    <Tabs 
                      value={value} 
                      onChange={handleChange} 
                      centered 
                      variant="fullWidth"
                      sx={{
                        '& .MuiTabs-indicator' : {
                          height : '100%',
                          borderRadius : '40px',
                          backgroundColor : 'rgba(0,0,0,0.3)'
                        }
                      }}
                      >
                      <Tab label="Log In" />
                      <Tab label="Sign Up" />
                    </Tabs>
                  </Box>
                    <TabPanel value={value} index={0}>
                      <Login />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Signup />
                    </TabPanel>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
}