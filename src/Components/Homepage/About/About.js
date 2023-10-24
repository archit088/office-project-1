import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'

const aboutTextArray = [
    {
        id : 'about1',
        heading : 'Test heading 1',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        icon : ''
    },
    {
        id : 'about2',
        heading : 'Test heading 2',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        icon : ''
    },
    {
        id : 'about3',
        heading : 'Test heading 3',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        icon : ''
    },
    {
        id : 'about4',
        heading : 'Test heading 4',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        icon : ''
    },
    {
        id : 'about5',
        heading : 'Test heading 5',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        icon : ''
    },
    {
        id : 'about6',
        heading : 'Test heading 6',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        icon : ''
    },
]

function About() {
    return (
        <Box
            sx={{
                m  : '30px'
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
                            With company name you can do
                    </Typography>
                    <Box 
                        sx={{
                            position : 'absolute',
                            width : '400px',
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
                        aboutTextArray.map(i=> (
                            <Grid
                                item
                                md={4}
                                key={i.id}
                            >
                                <Paper
                                    sx={{
                                        p : '20px',
                                        textAlign : "left",
                                        boxShadow : '0px 0px 8px #ccc'
                                    }}
                                >
                                    <Typography
                                        variant="p"
                                        sx={{
                                            fontSize : '20px',
                                            fontWeight : 500,
                                        }}
                                    >
                                        {i.heading}
                                    </Typography>
                                    <Typography
                                        variant="p"
                                        sx={{
                                            display :'block',
                                            fontSize : '15px',
                                            mt : '5px'
                                        }}
                                    >
                                        {i.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default About