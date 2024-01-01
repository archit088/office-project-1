import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { API_URL } from "../../Config/config";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  CircularProgress,
  Slide,
  Snackbar,
} from "@mui/material";
import Footer from "../Homepage/Footer/Footer";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import { TextField } from "formik-mui";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function Contact() {
  const [open, setOpen] = useState(true)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();
    setLoading(true);
    const requestOptions = {
      method: "POST",
      url: `${API_URL}api/cms/contact-us`,
      data: {
        name: name,
        phone: phone,
        email: email,
        message: message,
      },
    };
    axios(requestOptions)
      .then(() => {
        handleOpen()
        setLoading(false);
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  };

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const initialValues = {
    name,
    email,
    phone,
    message,
  };
  return (
    <Box>
      <Navbar />
      <Banner />
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Paper
              sx={{
                m: "40px 0 ",
                padding: "40px 20px",
                textAlign: "center",
                boxShadow: "0px 0px 10px #ccc",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "20px",
                }}
              >
                <h3>Contact-Us</h3>
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
                A Contact Us page provides guidance for existing customers and
                offers an overview of your brand for new visitors. A strong
                Contact Us page should contain several elements, such as a phone
                number and links to social media channels. It should also be
                easy to navigate, as this makes for a positive customer
                experience A Contact Us page provides guidance for existing
                customers and offers an overview of your brand for new visitors.
                A strong Contact Us page should contain several elements, such
                as a phone number and links to social media channels. It should
                also be easy to navigate, as this makes for a positive customer
                experience ...{" "}
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper
              sx={{
                m: "40px 0 ",
                padding: "40px 20px",
                textAlign: "center",
                boxShadow: "0px 0px 10px #ccc",
              }}
            >
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
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={Yup.object().shape({
                    name: Yup.string().required('Required'),
                    email: Yup.string()
                      .email("Enter valid email")
                      .required("Required"),
                    phone: Yup.number()
                      .test(
                        "len",
                        "Phone number must be of 10 digits",
                        (val) => val.toString().length === 10
                      )
                      .required("Required"),
                    message: Yup.string().required("Required"),
                    // service : Yup.string().required('Required'),
                  })}
                  onSubmit={submitFormData}
                >
                  {({ errors, touched, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <Field
                        component={TextField}
                        name="name"
                        value={name}
                        error={!!errors.name && touched.name}
                        helperText={
                          errors.name && touched.name ? errors.name : ""
                        }
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        size="small"
                        label="Name"
                        placeholder="Enter Name"
                        sx={{
                          mb: "20px",
                        }}
                      />
                      <Field
                        component={TextField}
                        name="email"
                        value={email}
                        error={!!errors.email && touched.email}
                        helperText={
                          errors.email && touched.email ? errors.email : ""
                        }
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        size="small"
                        label="Email"
                        placeholder="Enter email"
                        sx={{
                          mb: "20px",
                        }}
                      />
                      <Field
                        component={TextField}
                        name="phone"
                        value={phone}
                        type="number"
                        error={!!errors.phone && touched.phone}
                        helperText={
                          errors.phone && touched.phone ? errors.phone : ""
                        }
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                        size="small"
                        label="Phone Number"
                        placeholder="Enter Phone Number"
                        sx={{
                          mb: "20px",
                        }}
                      />
                      {/* <Field
                            component={TextField}
                            name="service"
                            value={service}
                            error={!!errors.service && touched.service}
                            helperText={errors.service && touched.service ? errors.service : ''}
                            onChange={(e)=> setService(e.target.value)}
                            fullWidth
                            size='small'
                            label="Service"
                            placeholder='Enter Services'
                            sx={{
                                mb : '20px'
                            }}
                            
                        >
                          
                        </Field> */}
                      <Field
                        component={TextField}
                        multiline
                        rows={5}
                        name="message"
                        value={message}
                        error={!!errors.message && touched.message}
                        helperText={
                          errors.message && touched.message
                            ? errors.message
                            : ""
                        }
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                        size="small"
                        label="Message"
                        placeholder="Enter Message"
                        sx={{
                          mb: "20px",
                        }}
                      />
                      <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? <CircularProgress size={18} /> : "Submit"}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical : 'bottom',
          horizontal : 'center'
        }}
        onClose={handleClose}
        autoHideDuration={5000}
        TransitionComponent={SlideTransition}
        message="You Information saved successfully. Our team will reach you with in 24 hours."
      />
    </Box>
  );
}

export default Contact;
