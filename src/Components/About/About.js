import React from "react";
import Navbar from '../Navbar/Navbar';

import {
  Box,
 
  Container,
  Grid,
  Paper,

  Typography,
} from "@mui/material";
import Footer from "../Homepage/Footer/Footer";
import Image1 from "../../Assets/Images/image11.png";
import Image2 from "../../Assets/Images/image12.png";

const teamList = [
  {
    id: 0,
    name: "Person 1",
    image: Image1,
    designation: "CEO & Co Founder, Simpi Web",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
  {
    id: 1,
    name: "Person 2",
    image: Image2,
    designation: "CPTO & Co Founder, Simpi Web",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    name: "Person 3",
    image: Image1,
    designation: "COO & Co Founder, Simpi Web",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
  },
];

function AboutPage() {
  return (
    
    <Box>
      <Navbar/>
       <Container>
        <Paper
          sx={{
            m: "40px 0 ",
            padding: "40px 20px",
            textAlign: "center",
            boxShadow: "0px 0px 10px #ccc",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              fontSize: "30px",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: 500,
              fontSize: "18px",
              display: "block",
              margin: "30px",
              color: "#666",
            }}
          >
            About Us INDIAN COMPANY is an India based highly reliable home
            services provider company. Founded in the year 2023, As a
            trustworthy home and local service provider in India, we guarantee
            fair pricing, quality work and on time solutions for our customers.
            Customers use our platform to book our services such as home
            services (Regular cleaning, Deep cleaning, Kitchen cleaning,
            washroom cleaning and maid services), Baby sitting services,
            Security Guard services and more. You name the service and we haves
            the experts available to help you with it. Our network of
            professionals consists highly skilled and trained professionals, who
            aim to serve service seekers with the best solutions related to
            their needs.

            <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              fontSize: "30px",
              color : '#000',
              margin : '20px 0'
            }}
          >
           GOAL
          </Typography>
              The customer is the most important part of our
            business. Our company goal is to have customer service that is not
            just the best but legendary and we want to give employment to
            people. Our long-term goal, improving our standing in the
            marketplace requires a qualitative approach to collecting responses
            from our customers and next 5 years we want to see our company in
            the best service provider company.
          </Typography>
          <Box
            sx={{
              mt: "40px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item md={3}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    display: "block",
                    mb: "10px",
                  }}
                >
                  200
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Trained Professionals
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    display: "block",
                    mb: "10px",
                  }}
                >
                  10 million +
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Happy Customers
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    display: "block",
                    mb: "10px",
                  }}
                >
                  50
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Cities
                </Typography>
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    display: "block",
                    mb: "10px",
                  }}
                >
                  5
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
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
            p: "20px",
            textAlign: "center",
            boxShadow: "0px 0px 10px #ccc",
            mb: "40px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              fontSize: "28px",
            }}
          >
            Our Leadership Team
          </Typography>
          <Grid container spacing={2}>
            {teamList.map((t) => {
              return (
                <Grid item md={4} sm={12} xs={12} key={`team-user-${t.id}`}>
                  <Paper
                    sx={{
                      p: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        width: "150px",
                        height: "150px",
                        margin: "0 auto",
                      }}
                    >
                      <img
                        src={t.image}
                        alt={`${t.name}-image`}
                        style={{ width: "200px", height: "200px" }}
                      />
                    </Box>
                    <Typography
                      variant="p"
                      sx={{
                        display: "block",
                        fontSize: "20px",
                        mt: "5px",
                      }}
                    >
                      {t.name}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        display: "block",
                        fontSize: "16px",
                        mt: "5px",
                      }}
                    >
                      {t.designation}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        display: "block",
                        fontSize: "18px",
                        margin: "20px 0",
                      }}
                    >
                      {t.description}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}

export default AboutPage;
