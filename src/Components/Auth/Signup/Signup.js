import React from 'react'
import { Box, Typography, TextField, Button} from '@mui/material'
import { Link } from 'react-router-dom'

function Signup() {
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
                Signup
            </Typography>
            <TextField 
                fullWidth
                variant="outlined"
                label="Full Name"
                placeholder='Enter Full Name'
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
                label="Email"
                placeholder='Enter Email'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // }
                }}
            />
              <TextField 
                fullWidth
                variant="outlined"
                label="Mobile"
                placeholder='Enter Mobile'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // }
                }}
            />
            <TextField 
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                placeholder='Enter Password'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // }
                }}
            />
            <TextField 
                fullWidth
                variant="outlined"
                label="Confirm Password"
                type="password"
                placeholder='Enter Confirm Password'
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
                Signup
            </Button>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    mt : '10px'
                }}
            >
                <Typography variant="p">Already have an account, </Typography>
                <Link
                    to='/login'
                >
                    Login
                </Link>
            </Box>
        </Box>
    )
}

export default Signup