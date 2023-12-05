import React from 'react'
import Navbar from '../Navbar/Navbar'
// import Banner from '../Banner/Banner'
import Footer from '../Homepage/Footer/Footer'
import SingleSubCategory from './SingleSubCategory'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import BiotechIcon from '@mui/icons-material/Biotech';
import cookingsub from '../../Assets/Images/cookingsub.jpg'
import cleaningsub from '../../Assets/Images/cleaningsub.jpg'
import Image2 from '../../Assets/Images/image2.jpg'
import Image4 from '../../Assets/Images/image4.jpg'
// import Image9 from '../../Assets/Images/image9.jpg'
// import Image6 from '../../Assets/Images/image6.jpg'

const serviceList = [
    {
        id  : 1,
        serviceName : 'Service 1',
        image : <BiotechIcon />
    },
    {
        id  : 2,
        serviceName : 'Service 1',
        image : <BiotechIcon />
    },
    {
        id  : 3,
        serviceName : 'Service 1',
        image : <BiotechIcon />
    },
    {
        id  : 4,
        serviceName : 'Service 1',
        image : <BiotechIcon />
    },
    {
        id  : 5,
        serviceName : 'Service 1',
        image : <BiotechIcon />
    },
    {
        id  : 6,
        serviceName : 'Service 1',
        image : <BiotechIcon />
    },
]

const list = [
    {
       
        id : 1,
        name :  'Cooking',
        icon : cookingsub
    },
    {
        id : 2,
        name :  'Kitchen',
        icon : Image2
    },
    {
        id : 3,
        name :  'Cleaning',
        icon : cleaningsub
    },
    {
        id : 4,
        name :  'Washroom',
        icon : Image4
    },
   
]

function SubCategory(){
    
    return(
        <>
            <Navbar/>
            {/* <Banner/> */}
            <Container>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        md={4}
                    >
                        {
                            serviceList.map(s=> (
                                <Paper
                                    key={s.id}
                                    sx={{
                                        display : 'inline-block',
                                        p : '10px',
                                        m : '10px'
                                    }}
                                >
                                    <Box
                                        textAlign="center"
                                    >
                                    {s.image}
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize : '14px'
                                        }}
                                        component="p"
                                    >
                                    {s.serviceName}
                                    </Typography>
                                </Paper>
                            ))
                        }
                    </Grid>
                    <Grid
                        item
                        md={4}
                    >

                    </Grid>
                    <Grid
                        item
                        md={4}
                    >

                    </Grid>
                </Grid>
                
            </Container>
            
            <Box
                p="40px 0"
            >
                <Container>
                    <Grid
                        container
                        spacing={2}
                    >
                        {
                            list.map((item)=> (
                                <Grid 
                                    item
                                    md={3}
                                    key={item.id}
                                >
                                    <SingleSubCategory 
                                        item={item}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
            <Footer/>
        </>
    )
}

SubCategory.propTypes = {
    // item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default SubCategory
