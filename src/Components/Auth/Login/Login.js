import React from 'react'
import { Box, Typography, TextField, Button} from '@mui/material'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <Box>
            <Typography 
                variant="h1"
                sx={{
                    fontSize : '1.5rem',
                    fontWeight : '600',
                    m : '20px 0'
               
                }}
                >
                Login
            </Typography>
            <TextField 
                fullWidth
                variant="outlined"
                label="Email"
                size="small"
                placeholder='Enter Email address'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // p : '10px 10px'
                    // }
                }}
            />
            <TextField 
                fullWidth
                variant="outlined"
                label="Password"
                size="small"
                placeholder='Enter Password'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // }
                }}
            />
            <Button
                variant="contained"
                >
                Login
            </Button>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    mt : '10px'
                }}
            >
                <Typography variant="p">New user, </Typography>
                <Link
                    to='/signup'
                >
                    Signup
                </Link>
            </Box>
        </Box>
    )
}

export default Login