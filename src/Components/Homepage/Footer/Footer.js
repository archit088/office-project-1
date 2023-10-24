import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Container, Divider, Grid, Typography } from '@mui/material'

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor : "#000",
                padding : '50px 0'
            }}
        >
            <Container>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        md={3}
                    >
                        <Typography 
                            variant="p"
                            sx={{
                                color: '#fff',
                                display : 'block',
                                fontWeight : 600,
                                fontSize : '18px'
                            }}
                        >
                            Test Heading 1
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 1
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 2
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 3
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 4
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={3}
                    >
                        <Typography 
                            variant="p"
                            sx={{
                                color: '#fff',
                                display : 'block',
                                fontWeight : 600,
                                fontSize : '18px'
                            }}
                        >
                            Test Heading 1
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 1
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 2
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 3
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 4
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={3}
                    >
                        <Typography 
                            variant="p"
                            sx={{
                                color: '#fff',
                                display : 'block',
                                fontWeight : 600,
                                fontSize : '18px'
                            }}
                        >
                            Test Heading 1
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 1
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 2
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 3
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                display : 'block',
                                color: '#fff',
                                mt : '10px'
                            }}
                        >
                            Text 4
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        md={3}
                    >
                        <Typography
                            variant="p"
                            sx={{
                                color: '#fff',
                                display : 'block',
                                fontWeight : 600,
                                fontSize : '18px'
                            }}
                        >
                            Follow us on
                        </Typography>
                        <Box
                            mt="10px"
                        >
                            <FacebookIcon 
                                fontSize='large'
                                sx={{
                                    color : '#fff'
                                }}
                            />
                        </Box>
                        <Box
                            mt="10px"
                        >
                            <InstagramIcon 
                                fontSize='large'
                                sx={{
                                    color : '#fff'
                                }}
                            />
                        </Box>
                        <Box
                            mt="10px"
                        >
                            <TwitterIcon 
                                fontSize='large'
                                sx={{
                                    color : '#fff'
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Divider 
                    sx={{
                        backgroundColor :'#fff',
                        mt : '20px'
                    }}
                />
                <Typography 
                    variant="p"
                    sx={{
                        display : 'block',
                        mt : "20px",
                        textAlign : 'center',
                        color : '#fff'
                    }}
                >
                    Copyright &copy; 2023
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer