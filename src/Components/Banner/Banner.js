import React from 'react'
import { FaHandsHoldingChild } from 'react-icons/fa6'
import { Box, Container, Grid, Typography } from '@mui/material'
import BannerLogo from '../../Assets/Images/banner.jpg'
import './Banner.css'
import BannerSlider from './BannerSlider'

const list = [
    {
        id : 1,
        name :  'text 1',
        icon : <FaHandsHoldingChild color="#fff" fontSize={40} />
    },
    {
        id : 2,
        name :  'text 2',
        icon : <FaHandsHoldingChild color="#fff" fontSize={40}/>
    },
    {
        id : 3,
        name :  'text 3',
        icon : <FaHandsHoldingChild color="#fff" fontSize={40}/>
    },
    {
        id : 4,
        name :  'text 4',
        icon : <FaHandsHoldingChild color="#fff" fontSize={40}/>
    },
    {
        id : 5,
        name :  'text 5',
        icon : <FaHandsHoldingChild color="#fff" fontSize={40}/>
    },
    {
        id : 6,
        name :  'text 6',
        icon : <FaHandsHoldingChild color="#fff" fontSize={40}/>
    },
]

const Banner = () => {
    return (
        <Box>
            <BannerSlider />
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={4}>
                        <h1 className='heading'>Home services at your doortstep.</h1>
                        <p>Thoughtfull curations of our finest experiences</p>
                        <Box className="border">
                            <Grid container spacing={2}>
                                {
                                    list.map(l=> (
                                        <Grid item md={4} key={l.id}>
                                            <div className='banner-category' >
                                                {l.icon}
                                            </div>
                                            <Typography sx={{textAlign :'center'}}>{l.name}</Typography>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item md={8}>
                        <img
                            src={BannerLogo}
                            alt="banner"
                            style={{
                                objectFit : 'contain',
                                width : '100%',
                                borderRadius : '8px'
                            }}
                            />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
    
}

export default Banner;