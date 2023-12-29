import React, { useEffect,useState } from 'react'
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material'
// import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import homecategory from '../../../Assets/Images/homecategory.jpg'
// import babycategory from '../../../Assets/Images/babycategory.jpg'
//import Image3 from '../../../Assets/Images/image3.jpg'
//import Image4 from '../../../Assets/Images/image4.jpg'
// import Image5 from '../../../Assets/Images/image1.jpg'
import SingleCategory from './SingleCategory';
//import Image6 from '../../../Assets/Images/image6.jpg'
//import Image7 from '../../../Assets/Images/image7.jpg'
//import Image9 from '../../../Assets/Images/image9.jpg'
//import watchmen from '../../../Assets/Images/watchmen.jpg' 
import axios from 'axios';
import { API_URL } from '../../../Config/config'


function CategoryList() {
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])

    const getData = () => {
        setLoading(true)
        const requestOptions = {
            method : 'GET',
            url : `${API_URL}api/service/category/available` 
        }
        axios(requestOptions)
        .then(data=> {
            setLoading(false)
            setList(data.data.data)
        })
        .catch(error=> {
            setLoading(false)
            console.log('error', error)
        })
    }

    useEffect(()=>{
        getData()
    },[])
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
                            loading
                            ?
                            [0,1,2].map(i=> (
                                <Grid item md={4} key={`skeleton-${i}`}>
                                    <Skeleton 
                                        variant="rectangular"
                                        sx={{
                                            height : '200px',
                                            borderRadius : '8px 8px 0px 0px'
                                        }}
                                    />
                                    <Skeleton 
                                        variant='text'
                                        height={40}
                                    />
                                    <Skeleton 
                                        variant='rectangular'
                                        sx={{
                                            borderRadius : '0px 0px 8px 8px',
                                            height : '30px'
                                        }}
                                    />
                                </Grid>
                            ))
                            :
                            list.filter(f=> [1,2,3].includes(f.id)).map(i=> (
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
