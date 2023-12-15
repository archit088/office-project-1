import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Navbar from '../Navbar/Navbar'
// import Banner from '../Banner/Banner'
import Footer from '../Homepage/Footer/Footer'
import WashingSubCategory from './WashingSubCategory'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import BiotechIcon from '@mui/icons-material/Biotech';
import cookingsub from '../../Assets/Images/cookingsub.jpg'
import cleaningsub from '../../Assets/Images/cleaningsub.jpg'
import Image2 from '../../Assets/Images/image2.jpg'
import Image4 from '../../Assets/Images/image4.jpg'
import BannerSlider from '../Banner/BannerSlider';
// import Image9 from '../../Assets/Images/image9.jpg'
// import Image6 from '../../Assets/Images/image6.jpg'[]

const SubserviceList = [
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

const sublist = [
    {
       
        id : 1,
        name :  'Cooking Service',
        rating : 4.5,
        review : 1.5,
        time : '35 minutes',
        price : 100,
        icon : cookingsub,
        details : [
            {
                id : 11,
                headText : 'Lorem Ipsum is simply dummy text',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                id : 12,
                headText : 'Lorem Ipsum is simply dummy text',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
        ]
    },
    {
        id : 2,
        name :  'Kitchen Service',
        icon : Image2,
        rating : 4.5,
        review : 1.5,
        time : '35 minutes',
        price : 100,
        details : [
            {
                id : 21,
                headText : 'Lorem Ipsum is simply dummy text',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                id : 22,
                headText : 'Lorem Ipsum is simply dummy text',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
        ]
    },
    {
        id : 3,
        name :  'Cleaning Service',
        icon : cleaningsub,
        rating : 4.5,
        review : 1.5,
        time : '35 minutes',
        price : 100,
        details : [
            {
                id : 31,
                headText : 'Lorem Ipsum is simply dummy text',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                id : 32,
                headText : 'Lorem Ipsum is simply dummy text',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
        ]
    },
    {
        id : 4,
        name :  'Washroom Service',
        icon : Image4,
        rating : 4.6,
        review : 2.5,
        time : '1 hour 35 minutes',
        price : 500,
        details : [
            {
                id : 41,
                headText : 'Lorem Ipsum is simply dummy text',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                id : 42,
                headText : 'Lorem Ipsum is simply dummy text',
                text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
        ]
    }
   
]

function Subwashing(){
    
    return(
        <>
            <Navbar/>
            {/* <Banner/> */}
            <Container>
                <Box
                    sx={{
                        mb : '20px'
                    }}
                >
                    <Typography 
                        variant="h1"
                        sx={{
                            fontSize : '30px',
                            fontWeight : '600',
                        }}
                    >
                        Service Name
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <StarIcon />
                        <Typography variant="p" sx={{ml : '5px'}}> 4.01 (6k Bookings)</Typography>
                    </Box>
                </Box>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        md={4}
                    >
                        <Paper
                            sx={{
                                p : '10px',
                                boxShadow : '0px 0px 10px #eaeaea'
                            }}
                        >
                            <Typography 
                                variant="p"
                                sx={{
                                    display : 'block',
                                    fontWeight : '500',
                                    fontSize : '18px',
                                    mb : '10px'
                                }}
                            >
                                Select a Service
                            </Typography>
                        {
                            SubserviceList.map(s=> (
                                <Box
                                    key={s.id}
                                    sx={{
                                        display : 'inline-block',
                                        border : '1px solid #eaeaea',
                                        borderRadius : '10px',
                                        p : '10px',
                                        mr : '6px',
                                        mb : '6px',
                                        transition : '0.5s',
                                        '&:hover' : {
                                            boxShadow : '0px 0px 10px #ccc',
                                            cursor : 'pointer'
                                        }
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
                                </Box>
                            ))
                        }
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        md={8}
                    >
                        <Box
                        >
                        <BannerSlider 
                            height={300}
                        />
                        </Box>
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
                            sublist.map((item)=> (
                                <Grid 
                                    item
                                    md={4}
                                    key={item.id}
                                >
                                    <WashingSubCategory 
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

Subwashing.propTypes = {
    // item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default Subwashing
