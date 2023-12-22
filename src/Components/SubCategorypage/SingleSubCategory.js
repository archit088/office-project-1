import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Box, Typography, Divider, Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import cookingsub from '../../Assets/Images/cookingsub.jpg'
// import BannerSlider from '../Banner/BannerSlider';

function SingleSubCategory({ item, openForm, handleOpen, index }) {

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
                            onClick={()=> openForm(index)}
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
                            onClick={()=> handleOpen(index)}
                            color="primary"
                            size="small"
                        >
                            View More
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

SingleSubCategory.propTypes = {
    index : PropTypes.number.isRequired,
    openForm : PropTypes.func.isRequired,
    handleOpen : PropTypes.func.isRequired,
    item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default SingleSubCategory
