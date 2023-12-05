import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import './Banner.css'
import BannerSlider from './BannerSlider'

const Banner = () => {
    return (
        <Box>
            <Box
                sx={{
                    position : 'relative'
                }}
            >
                <BannerSlider />
                <Box
                    sx={{
                        position : 'absolute',
                        background : 'rgba(0,0,0,0.5)',
                        height : '400px',
                        width : '100%',
                        top : 0,
                        zIndex : 9
                    }}
                >
                    <Container>
                        <Box
                            display="flex"
                            alignItems="center"
                            height="400px"
                        >
                            <Box>
                                <Typography 
                                    variant="h1"
                                    sx={{
                                        color : '#fff',
                                        fontSize : '50px',
                                        mb : '20px'
                                    }}
                                >
                                   MY Indian Company Providing good and best services
                                </Typography>
                                <Typography 
                                    variant="h1"
                                    sx={{
                                        fontSize : '30px',
                                        color : '#999'
                                    }}
                                >
                                   home services,baby care services,security guard services.
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
    
}

export default Banner;