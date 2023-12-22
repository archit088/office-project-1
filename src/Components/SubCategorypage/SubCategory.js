import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import Navbar from '../Navbar/Navbar'
import Footer from '../Homepage/Footer/Footer'
import SingleSubCategory from './SingleSubCategory'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Button, Container, Dialog, DialogContent, Grid, Paper, Typography } from '@mui/material'
import BannerSlider from '../Banner/BannerSlider';
import CustomDialogTitle from '../Common/DialogTitle';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../Config/config'
import SubmitForm from './submitForm';

function SubCategory(){
    const { id } = useParams()
    const [open, setOpen] = useState(false)
    const [isForm, setIsForm] = useState(false)
    const [imagesList, setImagesList] = useState([])
    const [serviceList, setServiceList] = useState([])
    const [subCategoryId, setSubCategoryId] = useState(0)

    const handleOpen = (e) => {
        setOpen(true)
        setSubCategoryId(e)
    }

    const handleClose = () => {
        setOpen(false)
        setTimeout(() => {            
            setIsForm(false)
        }, 300);
    }

    const openForm = (e) => {
        setIsForm(true)
        handleOpen(e)
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
            url : `${API_URL}api/service/category/slider/${id}`,
        }
        axios(requestOptions)
        .then(data=> {
            console.log(data)
            setImagesList(data.data.data)

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
                            serviceList.map((s, index)=> (
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
                                    onClick={()=> handleOpen(index)}
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
                            sx={{
                                borderRadius : '8px',
                                overflow : 'hidden'
                            }}
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
                            serviceList.map((item, index)=> (
                                <Grid 
                                    item
                                    md={4}
                                    key={item.id}
                                >
                                    <SingleSubCategory 
                                        item={item}
                                        index={index}
                                        openForm={openForm}
                                        handleOpen={handleOpen}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Box>
            <Footer/>
            {
                open && (
                <Dialog
                    open={open}
                    maxWidth="xs"
                    fullWidth
                >
                    <CustomDialogTitle onClose={handleClose}>{ !isForm ? serviceList[subCategoryId]?.name : 'Submit Form'}</CustomDialogTitle>
                    <DialogContent
                        sx={{
                            p : '0px'
                        }}
                    >
                        {
                            isForm
                            ?
                            <SubmitForm
                                subCategoryId={serviceList[subCategoryId]?.id}
                                handleClose={handleClose}
                            />
                            :
                            <Box
                                sx={{
                                    p : '20px'
                                }}
                            >
                                <Box
                                    sx={{
                                        height : '200px',
                                        backgroundImage : `url(${serviceList[subCategoryId]?.files[0]?.file})`,
                                        backgroundSize : 'cover'
                                    }}
                                />
                                <Box
                                    sx={{
                                        p : "10px"
                                    }}
                                >
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Typography 
                                            variant="p"
                                            sx={{
                                                display : 'block',
                                                textAlign : 'left',
                                                fontWeight : 600,
                                                fontSize : '18px'

                                            }}
                                        >
                                            {serviceList[subCategoryId]?.name}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            onClick={openForm}
                                        >
                                            Book
                                        </Button>
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <StarIcon fontSize="small"/>
                                        <Typography variant="p" sx={{ml : '5px', fontSize : '13px'}}>(0 reviews)</Typography>
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        mt="8px"
                                    >
                                        <CurrencyRupeeIcon
                                            sx={{
                                                fontSize : '16px'
                                            }}
                                        />
                                        <Typography variant="p" sx={{ fontSize : '14px', fontWeight : 'bold'}}>{serviceList[subCategoryId]?.price}</Typography>
                                        <FiberManualRecordIcon 
                                            sx={{fontSize : '8px', m : '0px 10px', mt : '1px'}}
                                        />
                                        {/* <Typography variant="p" sx={{ fontSize : '12px'}}>{item.time}</Typography> */}
                                    </Box>
                                    <Typography variant="p">{serviceList[subCategoryId]?.description}</Typography>
                                    {/* <ul
                                        style={{
                                            margin : 0,
                                            padding : '0px',
                                            listStyle : 'none'
                                        }}
                                    >
                                        {
                                            item.details.map((i)=> (
                                                <li
                                                    key={i.id}
                                                    >
                                                    <Box
                                                        display="flex"
                                                        mb="20px"
                                                    >
                                                        <img 
                                                            src={cookingsub}
                                                            height={60}
                                                            width={60}
                                                            style={{
                                                                borderRadius : '8px'
                                                            }}
                                                        />
                                                        <Box
                                                            sx={{
                                                                ml : '10px'
                                                            }}
                                                        >
                                                            <Typography 
                                                                variant="p"
                                                                sx={{
                                                                    fontSize : '18px',
                                                                    fontWeight : '600',
                                                                    display : 'block',
                                                                    color : '#000'
                                                                }}
                                                            >
                                                                {i.headText}
                                                            </Typography>
                                                            <Typography 
                                                                variant="p"
                                                                sx={{
                                                                    fontSize : '15px',
                                                                    fontWeight : '500',
                                                                    color : '#666'
                                                                }}
                                                            >
                                                                {i.text}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </li>
                                            ))
                                        }
                                    </ul> */}
                                </Box>
                            </Box>
                        }
                    </DialogContent>
                </Dialog>
                )
            }
        </>
    )
}

SubCategory.propTypes = {
    // item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default SubCategory
