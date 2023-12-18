import React, { useState } from 'react'
import { Box, Typography, TextField, Button, CircularProgress} from '@mui/material'
import { useNavigate } from 'react-router-dom'
//import { Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            localStorage.setItem('loggedIn', true)
            navigate('/')
        }, 2000);
    }

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
                label="Phone"
                size="small"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                placeholder='Enter mobile number'
                sx={{
                    mb : '30px',
                    // '& fieldset' : {
                    // borderRadius : '30px',
                    // p : '10px 10px'
                    // }
                }}
            />
            {/* <TextField 
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
            /> */}
            <Button
                variant="contained"
                onClick={handleLogin}
                disabled={loading}
            >
                {
                    loading
                    ?
                    <CircularProgress
                        size={18}
                    />
                    :
                    "Proceed"
                }
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
                {/* <Link
                    to='/signup'
                >
                    Signup
                </Link> */}
            </Box>
        </Box>
    )
}

export default Login