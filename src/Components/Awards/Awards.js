import React from "react";
import Navbar from '../Navbar/Navbar';
import { Box,Container, Grid,Paper, Typography,}
 from "@mui/material";
import Footer from "../Homepage/Footer/Footer";
//import Image1 from '../../Assets/Images/image11.png'
//import Image2 from '../../Assets/Images/image12.png'

function Awardpage() {
  return (
    <Box>
      <Paper>
        <Navbar/>
       
      </Paper>
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
            <h4>5 Secrets to Award-Winning Content</h4>
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
            I recently had the privilege of being one of many judges reviewing
            Content Marketing Awards submissions. As I read through the entries
            (12 each in two categories), I was struck by the sharp contrast
            between the best work — the top three in each category — and the
            remaining nine. I had expected to see a gradient of many shades of
            gray; instead, there was a black-and-white difference between the
            losers and the winners. The hard part was selecting a champion among
            the top three because those three stood out like swans in a murder
            of crows. Clear patterns emerged. The contest rules and basic ethics
            prevent me from citing specific examples. (That absence, by my own
            standards, prevents this post from being a champion.) I’m forced to
            summarize the distinctions, but even as abstractions, the following
            themes may shed some insight on what distinguishes great from
            grating content.
            <h1>1. You gotta’ serve somebody</h1> but not yourself The weakest
            pieces were clearly self-serving; I could practically hear product
            managers and PR people whispering in the writers’ ears as they
            wrote. Product features, “secret sauces,” and obvious political
            agendas took precedence over audience relevance. The best work
            glowed with a laser-like focus on audience concerns, needs, and
            desires. When I read the champion content, I felt convinced that the
            authors really knew and understood their audiences, so much so that
            they could pass as colleagues. They addressed their readers’ hopes
            and fears without condescension, and presented empathetic solutions
            to real challenges.
            <h1> 2. Take deep dives instead of throwing in kitchen sinks </h1>I
            applaud the ambition of much of the work that I saw. Production
            values ran high, and most of the content creators took on topics of
            organic interest to their audiences. The mediocre work, however,
            took on too much, spreading itself wide and thin: These pieces
            tended to say familiar things about familiar issues. Champion
            content favored concentration, digging deeply to uncover fresh and
            unfamiliar insights or ideas. Again, I can’t reference a real
            contest entry. But here’s a fictitious example of different
            approaches: A Homeowner’s Guide to Lawn Care vs. 3 Things
            Massachusetts Gardeners Must Do Before Winter. The former is too
            broad to stand out; the latter promises something precise enough to
            attract urgent interest.
            
            <h1>3. Inspired, not tired</h1>  champions take
            risks At times I could predict, with dismaying accuracy, the
            substance of a given piece before I even opened it. It was an awful
            amount of the same-old, same-old: the same-old tips, the same-old
            recipes, the same-old human interest tearjerkers — even the same-old
            pop culture references. The champions all had something daring and
            unexpected about them: unusual inspirations, unconventional
            analogies, and surprising stories. Maybe this should be every
            creator’s rule of thumb: If an idea doesn’t make you at least a
            little nervous, it’s probably not worth pursuing. The best ideas
            inspire some fear: “Can we really get away with this?”
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
      </Container>
      <Footer />
    </Box>
  );
}

export default Awardpage;
