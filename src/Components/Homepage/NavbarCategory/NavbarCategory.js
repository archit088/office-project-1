import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, InputAdornment, TextField, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavbarCategory = () => {
    return (
        <div>
            <Container>
                <Box
                    sx={{
                        padding : '20px 0',
                        display : 'flex',
                        alignItems : 'center',
                        justifyContent : 'space-between'
                    }}
                >
                    <TextField
                        placeholder='Search'
                        size="small"
                        InputProps={{
                        endAdornment : (
                            <InputAdornment position='end'>
                                <SearchIcon />
                            </InputAdornment>
                        )
                        }}
                        sx={{
                            ml: '20px',
                        }}
                    />
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                                mr : '20px',
                                cursor : 'pointer'
                            }}
                        >
                            <Typography 
                                variant="p"
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            >
                                Category 1
                            </Typography>
                            <KeyboardArrowDownIcon />
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                                mr : '20px',
                                cursor : 'pointer'
                            }}
                        >
                            <Typography 
                                variant="p"
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            >
                                Category 2
                            </Typography>
                            <KeyboardArrowDownIcon />
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                                mr : '20px',
                                cursor : 'pointer'
                            }}
                        >
                            <Typography 
                                variant="p"
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            >
                                Category 3
                            </Typography>
                            <KeyboardArrowDownIcon />
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                                mr : '20px',
                                cursor : 'pointer'
                            }}
                        >
                            <Typography 
                                variant="p"
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            >
                                Category 4
                            </Typography>
                            <KeyboardArrowDownIcon />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default NavbarCategory