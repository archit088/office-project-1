import React from 'react'
import { Box, Container, Paper, TextField, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './navbarstyle.css'

function NavbarLower() {
    return (
        <Container>
            <Box
                sx={{
                    p : '20px'
                }}
                display="flex"
                alignItems="center"
            >
                <TextField
                    size="small"
                    placeholder='Search'
                />
                <Box
                    display="flex"
                    alignItems="center"
                    ml="20px"
                    className="list"
                >
                    <Typography
                        variant="p"
                        sx={{
                            fontWeight : 600
                        }}
                    >Home Services</Typography>
                    <KeyboardArrowDownIcon sx={{ml : '5px'}}/>
                    <Paper
                        className='list_category'
                    >
                        <Typography 
                            variant='p'
                            sx={{
                                fontWeight : '600',
                                fontSize : '15px',
                                display : 'block'
                            }}
                        >
                            Service List
                        </Typography>
                        <a
                            href="#">
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                                cooking
                            </Typography>
                        </a>
                        <a
                            href="#">
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                              cleaning
                            </Typography>
                        </a>
                        <a
                            href="#">
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                             washing
                            </Typography>
                        </a>
                    </Paper>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    ml="20px"
                    className="list"
                >
                    <Typography
                        variant="p"
                        sx={{
                            fontWeight : 600
                        }}
                    >
                        Main Category 2
                    </Typography>
                    <KeyboardArrowDownIcon sx={{ml : '5px'}}/>
                    <Paper
                        className='list_category'
                    >
                        <Typography 
                            variant='p'
                            sx={{
                                fontWeight : '600',
                                fontSize : '15px',
                                display : 'block'
                            }}
                        >
                            Service List
                        </Typography>
                        <a
                            href="#">
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                                Service 1
                            </Typography>
                        </a>
                        <a
                            href="#">
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                                Service 1
                            </Typography>
                        </a>
                        <a
                            href="#">
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                                Service 1
                            </Typography>
                        </a>
                    </Paper>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    ml="20px"
                    className="list"
                >
                    <Typography
                        variant="p"
                        sx={{
                            fontWeight : 600
                        }}
                    >Main Category 3</Typography>
                    <KeyboardArrowDownIcon sx={{ml : '5px'}}/>
                    <Paper
                        className='list_category'
                    >
                        <Typography 
                            variant='p'
                            sx={{
                                fontWeight : '600',
                                fontSize : '15px',
                                display : 'block'
                            }}
                        >
                            Service List
                        </Typography>
                        <a
                            href="#">
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                                Service 1
                            </Typography>
                        </a>
                        <a
                            href="#">
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                                Service 1
                            </Typography>
                        </a>
                        <a
                            href="#">
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                                Service 1
                            </Typography>
                        </a>
                    </Paper>
                </Box>
            </Box>
        </Container>
    ) 
}

export default NavbarLower