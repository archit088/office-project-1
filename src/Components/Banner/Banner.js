import React from 'react'
import { FaHandsHoldingChild } from 'react-icons/fa6'
import { Box, Grid, Typography } from '@mui/material'
import BannerLogo from '../../Assets/Images/banner.jpg'
import './Banner.css'

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
        <Box mt="20px">
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
                <Grid>
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </Grid>
            </Grid>
        </Box>
    )
    
}

export default Banner;