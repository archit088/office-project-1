import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
// import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image1 from '../../../Assets/Images/image1.jpg'
import Image2 from '../../../Assets/Images/image2.jpg'
import Image3 from '../../../Assets/Images/image3.jpg'
import Image4 from '../../../Assets/Images/image4.jpg'
// import Image5 from '../../../Assets/Images/image1.jpg'
import SingleCategory from './SingleCategory';
import Image6 from '../../../Assets/Images/image6.jpg'
//import Image7 from '../../../Assets/Images/image7.jpg'
import Image9 from '../../../Assets/Images/image9.jpg'





const list = [
    {
        id : 1,
        name :  'Construction',
        icon : Image1
    },
    {
        id : 2,
        name :  'Services',
        icon : Image2
    },
    {
        id : 3,
        name :  'Customer Service',
        icon : Image3
    },
    {
        id : 4,
        name :  'Hospital',
        icon : Image4
    },
    {
        id : 5,
        name :  'Painter',
        icon : Image9
    },
    {
        id : 6,
        name :  'Home Services',
        icon : Image6
    },
]

function CategoryList() {
    return (
        <Box
            sx={{
                textAlign : 'center',
                m : '50px 0'
            }}
        >
            <Container>
                <Box
                    sx={{
                        position : 'relative'
                    }}
                >
                    <Typography 
                        variant="p" 
                        sx={{
                            fontWeight : '800', 
                            fontSize : '25px', 
                            m : '20px 0 30px 0', 
                            display : 'block',
                            borderBottom : '1px solid #ccc',
                            textAlign : 'left',
                            pb : '5px'
                            }}
                        >
                            Latest Categories
                    </Typography>
                    <Box 
                        sx={{
                            position : 'absolute',
                            width : '220px',
                            height : '2px',
                            background : '#000',
                            bottom : '0px'
                        }}
                    />
                </Box>
                <Grid
                    container
                    spacing={2}
                >
                    {
                        list.map(i=> (
                            <Grid 
                                item md={4}
                                key={i.id}
                            >
                                <SingleCategory 
                                    item={i}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
                {/* <OwlCarousel 
                    className='owl-theme' 
                    loop 
                    autoplay
                    margin={20}
                    responsive={{
                        0 : {
                            items : 1
                        },
                        600 : {
                            items : 2
                        },
                        1000 : {
                            items : 4
                        }
                    }}
                >
                    {
                        list.map(l=> (
                            <div className="item"  key={l.id}>
                                <Box>
                                    <Box
                                        sx={{
                                            border : '1px solid #ccc',
                                            height : '270px',
                                            borderRadius : '50%',
                                            backgroundImage : `url(${l.icon})`,
                                            backgroundRepeat : 'no-repeat',
                                            backgroundSize : 'cover'
                                        }}
                                    />
                                    <Typography sx={{textAlign :'center', mt : '20px', fontWeight : '600'}} variant="p">{l.name}</Typography>
                                </Box>
                            </div>
                        ))
                    }
                </OwlCarousel> */}
            </Container>
        </Box>
    )
}

export default CategoryList