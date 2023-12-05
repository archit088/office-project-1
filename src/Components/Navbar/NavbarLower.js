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
                            href="SubCategory-page"
                            style={{
                                textDecoration : 'none'
                            }}
                            >
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                                Cooking
                            </Typography>
                        </a>
                        <a
                            href="#"
                            style={{
                                textDecoration : 'none'
                            }}
                            >
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                              Cleaning
                            </Typography>
                        </a>
                        <a
                            href="#"
                            style={{
                                textDecoration : 'none'
                            }}
                            >
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                             Washing
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
                    >Baby Care Services</Typography>
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
                                New born baby
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
                             3-8 year baby
                            </Typography>
                        </a>
                        <a
                            href="#">
                            
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
                       Security Guard Service
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
                              Home guard
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
                              Office guard
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
                             Hospital guard
                            </Typography>
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                            watch man 
                            </Typography>
                            <Typography 
                                variant='p'
                                sx={{
                                    fontWeight : '600',
                                    fontSize : '15px',
                                    display : 'block',
                                    mt : '5px'
                                }}
                            >
                          Society guard
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
                    >Old age care services
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
            </Box>
            
        </Container>
    ) 
}

export default NavbarLower