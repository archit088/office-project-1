import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/slogo.png'
import { Box, Button, Container, Grid, Paper, Toolbar, Typography } from '@mui/material'
import Footer from '../Homepage/Footer/Footer'
import Image1 from '../../Assets/Images/image1.jpg'

const teamList = [
    {
        id : 0,
        name : 'Person 1',
        image : Image1,
        designation : 'CEO & Co Founder, Simpi Web',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id : 1,
        name : 'Person 2',
        image : Image1,
        designation : 'CPTO & Co Founder, Simpi Web',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
    {
        id : 2,
        name : 'Person 3',
        image : Image1,
        designation : 'COO & Co Founder, Simpi Web',
        description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
    },
]

function AboutPage() {
    return (
        <Box>
            <Paper>
                <Container>
                    <Toolbar>
                        <Link
                            to="/"
                        >
                            <img
                            src={Logo}
                            alt="logo"
                            />
                        </Link>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button variant="outlined">Login/Sign Up</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </Paper>
            <Container>
                <Paper
                    sx={{
                        m : '40px 0 ',
                        padding : '40px 20px',
                        textAlign : 'center',
                        boxShadow : '0px 0px 10px #ccc'
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight : '500',
                            fontSize : '30px'
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            fontWeight : 500,
                            fontSize : '18px',
                            display : 'block',
                            margin  : '30px',
                            color : '#666'
                        }}
                    >
                    Simpi Web is a technology platform offering a variety of services at home. Customers use our platform to book services such as beauty treatments, haircuts, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting etc. These services are delivered in the comfort of their home and at a time of their choosing. We promise our customers a high quality, standardised and reliable service experience. To fulfill this promise, we work closely with our hand-picked service partners, enabling them with technology, training, products, tools, financing, insurance and brand, helping them succeed and deliver on this promise. 
                    </Typography>
                    <Box
                        sx={{
                            mt : '40px'
                        }}
                    >
                        <Grid
                            container
                            spacing={2}
                        >
                            <Grid
                                item
                                md={3}
                            >
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontSize : '30px',
                                        fontWeight : 600,
                                        display : 'block',
                                        mb : '10px'
                                    }}
                                >
                                    200
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontSize : '20px'
                                    }}
                                >
                                    Trained Professionals
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                md={3}
                            >
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontSize : '30px',
                                        fontWeight : 600,
                                        display : 'block',
                                        mb : '10px'
                                    }}
                                >
                                    10 million +
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontSize : '20px'
                                    }}
                                >
                                    Happy Customers
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                md={3}
                            >
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontSize : '30px',
                                        fontWeight : 600,
                                        display : 'block',
                                        mb : '10px'
                                    }}
                                >
                                    50
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontSize : '20px'
                                    }}
                                >
                                    Cities
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                md={3}
                            >
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontSize : '30px',
                                        fontWeight : 600,
                                        display : 'block',
                                        mb : '10px'
                                    }}
                                >
                                    5
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontSize : '20px'
                                    }}
                                >
                                    Countries
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                <Paper
                    sx={{
                        p : '20px',
                        textAlign : 'center',
                        boxShadow : '0px 0px 10px #ccc',
                        mb : '40px'
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight : '500',
                            fontSize : '28px'
                        }}
                    >
                        Our Leadership Team
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                    >
                        {
                            teamList.map(t=> (
                                <Grid
                                    item
                                    md={4}
                                    sm={12}
                                    xs={12}
                                    key={`team-user-${t.id}`}
                                >
                                    <Paper
                                        sx={{
                                            p : '20px'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                borderRadius : '50%',
                                                overflow : 'hidden',
                                                width : '150px',
                                                height : '150px',
                                                margin : '0 auto'
                                            }}
                                        >
                                            <img 
                                                src={t.image} 
                                                alt={`${t.name}-image`}
                                                style={{width: "200px", height: "200px"}}
                                                />
                                        </Box>
                                        <Typography
                                            variant="p"
                                            sx={{
                                                display : "block",
                                                fontSize : '20px',
                                                mt : '5px'
                                            }}
                                        >
                                            {t.name}
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            sx={{
                                                display : 'block',
                                                fontSize : '16px',
                                                mt : '5px'
                                            }}
                                        >
                                            {t.designation}
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            sx={{
                                                display : 'block',
                                                fontSize : '18px',
                                                margin : '20px 0'
                                            }}
                                        >
                                            {t.description}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Paper>
            </Container>
            <Footer />
        </Box>
    )
}

export default AboutPage