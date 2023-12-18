import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Box, Typography, Divider, Button, Dialog, DialogContent } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CustomDialogTitle from '../Common/DialogTitle';
import SubmitForm from './submitForm';
// import cookingsub from '../../Assets/Images/cookingsub.jpg'
// import BannerSlider from '../Banner/BannerSlider';

function SingleSubCategory({ item }) {
    const [open, setOpen] = useState(false)
    const [isForm, setIsForm] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setTimeout(() => {            
            setIsForm(false)
        }, 300);
    }

    const openForm = () => {
        setIsForm(true)
        handleOpen()
    }

    return (
        <Box>
            <Paper 
                sx={{
                    boxShadow : '0px 0px 4px #ccc',
                    borderRadius : '8px',
                    height : '400px',
                    overflow : 'hidden',
                    '&:hover' : {
                        cursor : 'pointer',
                        boxShadow : '0px 0px 16px #ccc'
                    }
                }}
            >
                <Box
                    sx={{
                        height : '200px',
                        backgroundImage : `url(${item?.files[0]?.file})`,
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
                            {item.name}
                        </Typography>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={openForm}
                        >
                          Book Now
                        </Button>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <StarIcon fontSize="small"/>
                        {/* <Typography variant="p" sx={{ml : '5px', fontSize : '13px'}}>{item.rating} ({item.review} reviews)</Typography> */}
                        <Typography variant="p" sx={{ml : '5px', fontSize : '13px'}}>0 reviews</Typography>
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
                        <Typography variant="p" sx={{ fontSize : '14px', fontWeight : 'bold'}}>{item.price}</Typography>
                        <FiberManualRecordIcon 
                            sx={{fontSize : '8px', m : '0px 10px', mt : '1px'}}
                        />
                        {/* <Typography variant="p" sx={{ fontSize : '12px'}}>{item.time}</Typography> */}
                    </Box>
                    <Divider
                        sx={{
                            mt : '10px'
                        }}
                    />
                    <Box
                        sx={{
                            p : '10px',
                        }}
                    >
                        <Typography variant="p">{item.description.substring(0, 140)}</Typography>
                        <Button
                            onClick={handleOpen}
                            color="primary"
                            size="small"
                        >
                            View More
                        </Button>
                    </Box>
                </Box>
            </Paper>
            <Dialog
                open={open}
                maxWidth="xs"
                fullWidth
            >
                <CustomDialogTitle onClose={handleClose}>{ !isForm ? item.name : 'Submit Form'}</CustomDialogTitle>
                <DialogContent
                    sx={{
                        p : '0px'
                    }}
                >
                    {
                        isForm
                        ?
                        <SubmitForm 
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
                                    backgroundImage : `url(${item?.files[0]?.file})`,
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
                                        {item.name}
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
                                    <Typography variant="p" sx={{ fontSize : '14px', fontWeight : 'bold'}}>{item.price}</Typography>
                                    <FiberManualRecordIcon 
                                        sx={{fontSize : '8px', m : '0px 10px', mt : '1px'}}
                                    />
                                    {/* <Typography variant="p" sx={{ fontSize : '12px'}}>{item.time}</Typography> */}
                                </Box>
                                <Typography variant="p">{item.description}</Typography>
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
        </Box>
    )
}

SingleSubCategory.propTypes = {
    item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default SingleSubCategory
