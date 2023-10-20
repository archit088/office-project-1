import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import OwlCarousel from 'react-owl-carousel'
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
        name :  'Category 1',
        icon : Image1
    },
    {
        id : 2,
        name :  'Category 2',
        icon : Image2
    },
    {
        id : 3,
        name :  'Category 3',
        icon : Image3
    },
    {
        id : 4,
        name :  'Category 4',
        icon : Image4
    },
    {
        id : 5,
        name :  'Category 5',
        icon : Image5
    },
    {
        id : 6,
        name :  'Category 6',
        icon : Image1
    },
]

function CategoryList() {
    return (
        <Box
            sx={{
                textAlign : 'center'
            }}
        >
            <Typography variant="p" sx={{fontWeight : '800', fontSize : '25px', m : '20px 0 30px 0', display : 'block'}}>Latest Categories</Typography>
            <Container>
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
                </OwlCarousel>
            </Container>
        </Box>
    )
}

export default CategoryList