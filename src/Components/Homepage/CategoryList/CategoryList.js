import React, { useEffect,useState } from 'react'
import { Box, Container, Grid, Skeleton, Typography } from '@mui/material'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SingleCategory from './SingleCategory';

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
                   
                </Container>
            </Box>
    )
}

export default CategoryList
