import React from 'react'
import { Box } from "@mui/material"
import Navbar from "../Navbar/Navbar"
import Banner from "../Banner/Banner"
import CategoryList from './CategoryList/CategoryList'
import NavbarCategory from './NavbarCategory/NavbarCategory'


const Homepage = () => {
    return (
        <Box>
            <Navbar />
            <NavbarCategory />
            <Banner />
            <CategoryList />
        </Box>
    )
}

export default Homepage