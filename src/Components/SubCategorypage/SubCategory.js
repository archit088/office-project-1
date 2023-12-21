import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import Navbar from '../Navbar/Navbar'
// import Banner from '../Banner/Banner'
import Footer from '../Homepage/Footer/Footer'
import SingleSubCategory from './SingleSubCategory'
import { Box, Button, Container, Dialog, DialogActions, DialogContent, Grid, Paper, Typography } from '@mui/material'
// import BiotechIcon from '@mui/icons-material/Biotech';
// import cookingsub from '../../Assets/Images/cookingsub.jpg'
// import cleaningsub from '../../Assets/Images/cleaningsub.jpg'
// import Image2 from '../../Assets/Images/image2.jpg'
// import Image4 from '../../Assets/Images/image4.jpg'
import BannerSlider from '../Banner/BannerSlider';
import CustomDialogTitle from '../Common/DialogTitle';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../Config/config'
// import Image9 from '../../Assets/Images/image9.jpg'
// import Image6 from '../../Assets/Images/image6.jpg'

// const serviceList = [
//     {
//         id  : 1,
//         serviceName : 'Service 1',
//         image : <BiotechIcon />
//     },
//     {
//         id  : 2,
//         serviceName : 'Service 1',
//         image : <BiotechIcon />
//     },
//     {
//         id  : 3,
//         serviceName : 'Service 1',
//         image : <BiotechIcon />
//     },
//     {
//         id  : 4,
//         serviceName : 'Service 1',
//         image : <BiotechIcon />
//     },
//     {
//         id  : 5,
//         serviceName : 'Service 1',
//         image : <BiotechIcon />
//     },
//     {
//         id  : 6,
//         serviceName : 'Service 1',
//         image : <BiotechIcon />
//     },
// ]

// const list = [
//     {
       
//         id : 1,
//         name :  'Cooking Service',
//         rating : 4.5,
//         review : 1.5,
//         time : '35 minutes',
//         price : 100,
//         icon : cookingsub,
//         details : [
//             {
//                 id : 11,
//                 headText : 'Lorem Ipsum is simply dummy text',
//                 text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//             },
//             {
//                 id : 12,
//                 headText : 'Lorem Ipsum is simply dummy text',
//                 text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//             },
//         ]
//     },
//     {
//         id : 2,
//         name :  'Kitchen Service',
//         icon : Image2,
//         rating : 4.5,
//         review : 1.5,
//         time : '35 minutes',
//         price : 100,
//         details : [
//             {
//                 id : 21,
//                 headText : 'Lorem Ipsum is simply dummy text',
//                 text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//             },
//             {
//                 id : 22,
//                 headText : 'Lorem Ipsum is simply dummy text',
//                 text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//             },
//         ]
//     },
//     {
//         id : 3,
//         name :  'Cleaning Service',
//         icon : cleaningsub,
//         rating : 4.5,
//         review : 1.5,
//         time : '35 minutes',
//         price : 100,
//         details : [
//             {
//                 id : 31,
//                 headText : 'Lorem Ipsum is simply dummy text',
//                 text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//             },
//             {
//                 id : 32,
//                 headText : 'Lorem Ipsum is simply dummy text',
//                 text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//             },
            
//         ]
//     },
//     {
//         id : 4,
//         name :  'Washroom Service',
//         icon : Image4,
//         rating : 4.6,
//         review : 2.5,
//         time : '1 hour 35 minutes',
//         price : 500,
//         details : [
//             {
//                 id : 41,
//                 headText : 'Lorem Ipsum is simply dummy text',
//                 text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//             },
//             {
//                 id : 42,
//                 headText : 'Lorem Ipsum is simply dummy text',
//                 text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//             },
//         ]
//     },
   
// ]

function SubCategory(){
    const { id } = useParams()
    const [open, setOpen] = useState(false)
    const [serviceList, setServiceList] = useState([])
    const [imagesList, setImagesList] = useState([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const getSubCategoryData = () => {
        const requestOptions = {
            method : 'GET',
            url : `${API_URL}api/service/category/${id}`,
            headers : {
                'Token' : localStorage.getItem('authToken')
            }
        }
        axios(requestOptions)
        .then(data=> {
            setServiceList(data.data.data)
        })
        .catch(error=> {
            console.log('error', error)
        })
    }

    const getImages = () => {
        const requestOptions = {
            method : 'GET',
            headers : {
                'Token' : localStorage.getItem('authToken')
            },
            url : `${API_URL}api/service/category/images/${id}`,
        }
        axios(requestOptions)
        .then(data=> {
            setImagesList(data.data)
        })
        .catch(error=> {
            console.log('error', error)
        })
    }

    useEffect(()=>{
        if(id){
            getImages()
            getSubCategoryData()
        }
    },[id])

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
                        {serviceList[0]?.categories[0]?.name}
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
                            serviceList.map(s=> (
                                <Box
                                    key={s.id}
                                    sx={{
                                        display : 'inline-block',
                                        border : '1px solid #eaeaea',
                                        borderRadius : '10px',
                                        mr : '6px',
                                        mb : '6px',
                                        transition : '0.5s',
                                        overflow : 'hidden',
                                        width : '100px',
                                        '&:hover' : {
                                            boxShadow : '0px 0px 10px #ccc',
                                            cursor : 'pointer'
                                        }
                                    }}
                                >
                                    <Box
                                        textAlign="center"
                                        sx={{
                                            height : '50px',
                                            backgroundImage : `url(${s?.files[0]?.file})`,
                                            backgroundSize : 'cover',
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize : '14px',
                                            textOverflow : 'ellipsis',
                                            overflow : 'hidden',
                                            whiteSpace : 'nowrap',
                                            width : '90px',
                                            display: 'block',
                                            fontWeight : '600',
                                            p : '5px 10px'
                                        }}
                                        variant="p"
                                    >
                                    {s.name}
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
                            images={imagesList}
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
                            serviceList.map((item)=> (
                                <Grid 
                                    item
                                    md={4}
                                    key={item.id}
                                >
                                    <SingleSubCategory 
                                        item={item}
                                        handleOpen={handleOpen}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
            <Footer/>
            <Dialog
                open={open}
                maxWidth="sm"
                fullWidth
            >
                <CustomDialogTitle onClose={handleClose}>Book Service</CustomDialogTitle>
                <DialogContent>
                    <Typography>test</Typography>
                </DialogContent>
                <DialogActions>
                    <Button>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

SubCategory.propTypes = {
    // item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default SubCategory
