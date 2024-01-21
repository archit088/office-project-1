import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import './Banner.css'
import BannerSlider from './BannerSlider'
import image1 from '../../Assets/Images/image1.jpg'
import image2 from '../../Assets/Images/image2.jpg'
import image3 from '../../Assets/Images/image3.jpg'
import image4 from '../../Assets/Images/image4.jpg'
import useWidth from '../../helper/widthCalculate'

const list = [
    {
        "service_id": 1,
        "file": image1,
        "mime_type": "image/jpeg"
    },
    {
        "service_id": 2,
        "file": image2,
        "mime_type": "image/jpeg"
    },
    {
        "service_id": 3,
        "file": image3,
        "mime_type": "image/jpeg"
    },
    {
        "service_id": 4,
        "file": image4,
        "mime_type": "image/jpeg"
    },
]

const Banner = () => {
    const width = useWidth()
    return (
        <Box>
            <Box
                sx={{
                    position : 'relative'
                }}
            >
                <BannerSlider 
                    images={list}
                />
                <Box
                    sx={{
                        position : 'absolute',
                        background : 'rgba(0,0,0,0.5)',
                        height : ['xs', 'sm'].includes(width) ? '200px' : "400px",
                        width : '100%',
                        top : 0,
                        zIndex : 9
                    }}
                >
                    <Container>
                        <Box
                            display="flex"
                            alignItems="center"
                            height={['xs', 'sm'].includes(width) ? '200px' : "400px"}
                        >
                            <Box>
                                <Typography 
                                    variant="h1"
                                    sx={{
                                        color : '#fff',
                                        fontSize : ['xs', 'sm'].includes(width) ? '25px' : '50px',
                                        fontWeight : '500',
                                        mb : '20px'
                                    }}
                                >
                                   My Indian Company Providing good and best services
                                </Typography>
                                <Typography 
                                    variant="h1"
                                    sx={{
                                        fontSize : ['xs', 'sm'].includes(width) ? '20px' : "30px",
                                        color : '#fff'
                                    }}
                                >
                                   Home Services, Baby Care Services, Security Guard Services.
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