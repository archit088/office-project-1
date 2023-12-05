import React from 'react'
import { Box, Container, Tooltip, Typography } from '@mui/material'
import OwlCarousel from 'react-owl-carousel'
import GradeIcon from '@mui/icons-material/Grade';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image1 from '../../../Assets/Images/image1.jpg'
import Image2 from '../../../Assets/Images/image2.jpg'
import Image3 from '../../../Assets/Images/image3.jpg'
import Image4 from '../../../Assets/Images/image4.jpg'
import Image5 from '../../../Assets/Images/image1.jpg'

const list = [
    {
        id : 1,
        name :  'Test name 1',
        text : 'test text 1',
        icon : Image1,
        rating : '5.0'
    },
    {
        id : 2,
        name :  'Test name 2',
        text : 'test text 1',
        icon : Image2,
        rating : '4.9'
    },
    {
        id : 3,
        name :  'Test name 3',
        text : 'test text 1',
        icon : Image3,
        rating : '4.9'
    },
    {
        id : 4,
        name :  'Test name 4',
        text : 'test text 1',
        icon : Image4,
        rating : '4.8'
    },
    {
        id : 5,
        name :  'Test name 5',
        text : 'test text 1',
        icon : Image5,
        rating : '4.8'
    },
    {
        id : 6,
        name :  'Category 6',
        text : 'test text 1',
        icon : Image1,
        rating : '4.7'
    },
]

function TopRatings() {
    return (
        <Box
            sx={{
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
                            Latest Ratings
                    </Typography>
                    <Box 
                        sx={{
                            position : 'absolute',
                            width : '190px',
                            height : '2px',
                            background : '#000',
                            bottom : '0px'
                        }}
                    />
                </Box>
                <Box>
                    <OwlCarousel 
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
                            items : 6
                        }
                    }}
                >
                    {
                        list.map(l=> (
                            <div className="item"  key={l.id}>
                                <Box
                                    sx={{
                                        position : 'relative'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            border : '1px solid #ccc',
                                            height : '170px',
                                            borderRadius : '50%',
                                            backgroundImage : `url(${l.icon})`,
                                            backgroundRepeat : 'no-repeat',
                                            backgroundSize : 'cover'
                                        }}
                                    />
                                    <Tooltip
                                        title="Rating"
                                    >
                                        <Box
                                            sx={{
                                                position : 'absolute',
                                                left : '50%',
                                                transform: 'translateX(-50%) translateY(-50%)',
                                                background : "#fff",
                                                borderRadius : '8px',
                                                p : '5px 10px',
                                                border : '1px solid #ccc',
                                                display : 'flex',
                                                alignItems : 'center'
                                            }}
                                        >
                                            <GradeIcon 
                                                fontSize='small'
                                                sx={{
                                                    color : '#d8ae43'
                                                }}
                                            />
                                            {l.rating}
                                        </Box>
                                    </Tooltip>
                                    <Typography sx={{textAlign :'center', mt : '20px', fontWeight : '600', display : 'block'}} variant="p">{l.name}</Typography>
                                </Box>
                            </div>
                        ))
                    }
                </OwlCarousel>
                </Box>
            </Container>
        </Box>
    )
}

export default TopRatings