import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image1d from '../../../Assets/Images/about.png'

  

function About() {
  return (
    <Box
      sx={{
        m: "30px",
      }}
    >
      <Container>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: "800",
              fontSize: "25px",
              m: "20px 0 30px 0",
              display: "block",
              borderBottom: "1px solid #ccc",
              textAlign: "left",
              pb: "5px",
            }}
          >
            WELCOME TO OUR COMPANY
          </Typography>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "2px",
              background: "#000",
              bottom: "0px",
            }}
          />
        </Box>
        
       
        <Grid container spacing={6} >
            <Grid item md={6} sm={12} xs={12}>
                <Typography
                  variant="p"
                  sx={{
                    display: "block",
                    fontSize: "40px",
                    mt: "5px",
                    fontWeight:"600"
                  }}
                >
                    We Make Awesome IT Services For Your Newly Business   We Make Awesome IT Services For Your Newly Business
                </Typography>
             
            </Grid>
            <Grid item md={6} sm={12} xs={12}> 
              <img 
                src={Image1d}
                alt="About"
                width="100%"
              //  height="100%"
              />
            </Grid>
        </Grid>
     
      </Container>
    </Box>
  );
}

export default About;
