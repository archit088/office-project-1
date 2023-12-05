import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
// import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import homecategory from '../../../Assets/Images/homecategory.jpg'
import babycategory from '../../../Assets/Images/babycategory.jpg'
//import Image3 from '../../../Assets/Images/image3.jpg'
//import Image4 from '../../../Assets/Images/image4.jpg'
// import Image5 from '../../../Assets/Images/image1.jpg'
import SingleCategory from './SingleCategory';
//import Image6 from '../../../Assets/Images/image6.jpg'
//import Image7 from '../../../Assets/Images/image7.jpg'
//import Image9 from '../../../Assets/Images/image9.jpg'
import watchmen from '../../../Assets/Images/watchmen.jpg'
import { Link } from 'react-router-dom';





const list = [
    {
       
        id : 1,
        name :  'Home Services',
        text :' Certainly! Home services encompass a broad range of professional services designed to enhance and maintain the functionality, comfort, and aesthetics of a residential property. The task of home deep cleaning is a tedious one, particularly for today’s working professionals. But a clean house is something that everyone desires. To eliminate the stress, one can hire residential cleaning services that offer a range of cleaning solutions for different types of residential areas such as homes, flats, apartments, etc.Certainly Home services encompass a broad range of professional services designed to enhance and maintain the functionality comfort and aesthetics of a residential property These services are typically provided by skilled professionals or service companies Heres a general overview of various home services',
        icon : homecategory
       
    },
    
    {
        id : 2,
        name :  'Baby care Services',
        text :'Babysitter is someone wanted for impromptu situations or occasion by most families. The babysitting services is usually a short-term period of 3 to 5 hours or full time as you required. The babysitter tasks are to watch over the children, play with them, keep them occupied so that the parents can use the hours to get away and carry out their activities.  babysitter price will vary due to the number of babysitting hours, daytime or weekend. We provide babysitting service for infant and 3 to 8 years of age babies.        ',

        icon : babycategory
    },
    {
        id : 3,
        name :  'Security guard Services',
        text : 'Certainly! Creating content about security guards can be informative and helpful for those interested in the field or looking to enhance security measures.In an ever-changing world, the need for effective security measures has become paramount. Among the frontline defenders of safety are security guards, whose presence and expertise play a crucial role in safeguarding individuals, properties, and assets.',
        icon : watchmen
    },
    // {
    //     id : 4,
    //     name :  'Old age care',
    //     icon : Image4
    // },
    
]

function CategoryList() {
    return (
        <Link
            to="/SubCategory-page"
            style={{
                textDecoration : 'none'
            }}
        >
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
                                 Categories
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
        </Link>
    )
}

export default CategoryList
