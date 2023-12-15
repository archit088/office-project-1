import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Box, Typography, Divider, Button, Dialog, DialogContent } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CustomDialogTitle from '../Common/DialogTitle';
import cookingsub from '../../Assets/Images/cookingsub.jpg'
// import BannerSlider from '../Banner/BannerSlider';

function WashingSubCategory({ item }) {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box>
            <Paper 
                sx={{
                    boxShadow : '0px 0px 4px #ccc',
                    borderRadius : '8px',
                    overflow : 'hidden',
                    '&:hover' : {
                        cursor : 'pointer',
                        boxShadow : '0px 0px 16px #ccc'
                    }
                }}
                onClick={handleOpen}
            >
                <Box
                    sx={{
                        height : '200px',
                        backgroundImage : `url(${item.icon})`,
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
                        >
                           Add
                        </Button>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <StarIcon fontSize="small"/>
                        <Typography variant="p" sx={{ml : '5px', fontSize : '13px'}}>{item.rating} ({item.review} reviews)</Typography>
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
                        <Typography variant="p" sx={{ fontSize : '12px'}}>{item.time}</Typography>
                    </Box>
                    <Divider
                        sx={{
                            mt : '10px'
                        }}
                    />
                    <ul
                        style={{
                            margin : 0,
                            marginLeft : '15px',
                            padding : '10px'
                        }}
                    >
                        {
                            item.details.map((i)=> (
                                <li
                                    key={i.id}
                                    >
                                    <Typography 
                                        variant="p"
                                        sx={{
                                            fontSize : '13px',
                                            textOverflow : 'ellipsis',
                                            overflow : 'hidden',
                                            width :'100%',
                                            whiteSpace : 'nowrap',
                                            display : 'inline-block'
                                        }}
                                    >
                                        {i.text}
                                    </Typography>
                                </li>
                            ))
                        }
                    </ul>
                </Box>
            </Paper>
            <Dialog
                open={open}
                maxWidth="sm"
                fullWidth
            >
                <CustomDialogTitle onClose={handleClose}>Cooking Service</CustomDialogTitle>
                <DialogContent
                    sx={{
                        p : '0px'
                    }}
                >
                    {/* <BannerSlider 
                        height={200}
                    /> */}
                    <Box
                        sx={{
                            p : '20px'
                        }}
                    >
                        <Box
                            sx={{
                                height : '200px',
                                backgroundImage : `url(${item.icon})`,
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
                                >
                                    Book
                                </Button>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                            >
                                <StarIcon fontSize="small"/>
                                <Typography variant="p" sx={{ml : '5px', fontSize : '13px'}}>{item.rating} ({item.review} reviews)</Typography>
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
                                <Typography variant="p" sx={{ fontSize : '12px'}}>{item.time}</Typography>
                            </Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight : 600,
                                    fontSize : '18px',
                                    m : '20px 0'
                                }}
                            >
                                Includes
                            </Typography>
                            <ul
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
                            </ul>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    )
}

WashingSubCategory.propTypes = {
    item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default WashingSubCategory
