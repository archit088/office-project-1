import React from 'react'
import { Box } from "@mui/material"
import Navbar from "../Navbar/Navbar"
import Banner from "../Banner/Banner"
import CategoryList from './CategoryList/CategoryList'


const Homepage = () => {
    return (
        <Box>
            <Navbar />
            <Banner />
            <CategoryList />
        </Box>
    )
}

export default Homepage