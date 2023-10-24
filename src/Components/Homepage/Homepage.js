import React from 'react'
import { Box } from "@mui/material"
import Navbar from "../Navbar/Navbar"
import Banner from "../Banner/Banner"
import CategoryList from './CategoryList/CategoryList'
import NavbarCategory from './NavbarCategory/NavbarCategory'
import About from './About/About'
import Footer from './Footer/Footer'
import ServiceList from './ServiceList/ServiceList'
import TopRatings from './TopRatings/TopRatings'


const Homepage = () => {
    return (
        <Box>
            <Navbar />
            <NavbarCategory />
            <Banner />
            <CategoryList />
            <ServiceList />
            <TopRatings />
            <About />
            <CategoryList />
            <Footer />
        </Box>
    )
}

export default Homepage