import { Box, Container } from "@mui/material"
import Navbar from "../Navbar/Navbar"
import Banner from "../Banner/Banner"

const Homepage = () => {
    return (
        <Box>
            <Navbar />
            <Container>
                <Banner />
            </Container>
        </Box>
    )
}

export default Homepage