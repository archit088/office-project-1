import React, { useState } from 'react'
import { Box, Typography, TextField, Button, CircularProgress, InputAdornment} from '@mui/material'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../../../firebase'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const [otpSent, setOtpSent] = useState(false)

    const handleLogin = () => {
        setLoading(true)
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size : 'invisible',
            callback : () => {
                const mobPhone = `+91 ${phone}`
                const appVerifier = window.recaptchaVerifier
                signInWithPhoneNumber(auth, mobPhone, appVerifier)
                .then((data)=> {
                    setLoading(false)
                    setOtpSent(true)
                    window.confirmationResult = data;
                })
                .catch(error=> {
                    setLoading(false)
                    console.log('error', error)
                })
            },
        })
        window.recaptchaVerifier.verify();
    }

    const handleVerifyOTP = () => {
        setLoading(true)
        window.confirmationResult.confirm(otp)
        .then(()=> {
            setLoading(false)
            localStorage.setItem('loggedIn', true)
            localStorage.setItem('mobile', phone)
            navigate('/')
            setOtp('')
            setPhone('')
            setOtpSent(false)
        })
        .catch(error=> {
            setLoading(false)
            console.log('error', error)
        })
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
                type="number"
                value={phone}
                disabled={otpSent}
                onChange={(e)=> setPhone(e.target.value)}
                placeholder='Enter mobile number'
                InputProps={{
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                  }}
                sx={{
                    mb : '30px',
                }}
            />
            {
                otpSent && (
                    <TextField 
                        fullWidth
                        value={otp}
                        onChange={(e)=> setOtp(e.target.value)}
                        type="number"
                        variant="outlined"
                        label="OTP"
                        size="small"
                        placeholder='Enter Password'
                        sx={{
                            mb : '30px',
                        }}
                    /> 
                )
            }
            <Button
                variant="contained"
                onClick={()=> otpSent ? handleVerifyOTP() :  handleLogin()}
                disabled={loading}
            >
                {
                    loading
                    ?
                    <CircularProgress
                        size={18}
                    />
                    :
                    otpSent
                    ?
                    "Verify OTP"
                    :
                    "Generate OTP"
                }
            </Button>
            <div id="recaptcha-container"></div>
        </Box>
    )
}

export default Login