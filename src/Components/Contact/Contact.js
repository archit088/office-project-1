import React from 'react'
import { Box, Container, Grid, Paper,TextField,Link, Typography } from '@mui/material'
import Footer from '../Homepage/Footer/Footer'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'

    function Contact() {
    
        
        return (
           
            <Box>
            <Container>
            <Navbar/>
            <Banner/>
            
                  
                    
                    
                        <Grid
                            container
                            spacing={2}
                        >
                            <Grid
                                item
                                md={6}
                            >
                <Paper
                    sx={{
                        m : '40px 0 ',
                        padding : '40px 20px',
                        textAlign : 'center',
                        boxShadow : '0px 0px 10px #ccc'
                    }}
                >
                     <Typography
                                    variant="p"
                                    sx={{
                                        fontSize : '20px'
                                    }}
                                >
                                  <h3>Contact-Us</h3>  
                                </Typography>
                              <Typography
                        variant="p"
                        sx={{
                            fontWeight : 500,
                            fontSize : '18px',
                            display : 'block',
                            margin  : '30px',
                            color : '#666'
                        }}
                    >
A Contact Us page provides guidance for existing customers and offers an overview of your brand for new visitors. A strong Contact Us page should contain several elements, such as a phone number and links to social media channels. It should also be easy to navigate, as this makes for a positive customer experience                    </Typography>
                            </Paper>
                               
                            </Grid>
                            <Grid
                                item
                                md={6}
                            >
                                
                       
                   <Paper
                    sx={{
                        m : '40px 0 ',
                        padding : '40px 20px',
                        textAlign : 'center',
                        boxShadow : '0px 0px 10px #ccc'
                    }}
                >
                              <Typography
                        variant="p"
                        sx={{
                            fontWeight : 500,
                            fontSize : '18px',
                            display : 'block',
                            margin  : '30px',
                            color : '#666'
                        }}
                    >
  <TextField 
                fullWidth
                variant="outlined"
                label="Full Name"
                placeholder='Enter Full Name'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // p : '10px 10px'
                    // }
                }}
            />
            
            <TextField 
                fullWidth
                variant="outlined"
                label="E-Mail"
                placeholder='Enter E-Mail'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // }
                }}
            />
            
            <TextField 
                fullWidth
                variant="outlined"
                label="Mobile"
                placeholder='Enter Mobile'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // }
                }}
            />          

             <TextField 
                fullWidth
                variant="outlined"
                label="Summary"
                placeholder='Sumamry'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // p : '10px 10px'
                    // }
                }}
            />    
             <Link
                    to='/login'
                >
                    Login
                </Link>  
                </Typography>
                            </Paper>
                            </Grid>
                            
                        </Grid>
                
                <Footer/>
            </Container>
            </Box>
        )
    }
    
    export default Contact

