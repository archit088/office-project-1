import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { TextField } from 'formik-mui';
import axios from 'axios';
import * as Yup from 'yup'
import { API_URL } from '../../Config/config'
import { Field, Form, Formik } from 'formik';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function SubmitForm({ handleClose, subCategoryId }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const submitFormData = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('address',address)
        formData.append('message', message)
        formData.append('service', subCategoryId)
        const requestOptions = {
            method : 'POST',
            url :  `${API_URL}api/customer/enquiry`,
            data : formData
        }
        axios(requestOptions)
        .then(()=> {
            setSubmitted(true)
        })
        .catch(error=> {
            console.log('error', error)
        })
    }

    const initialValues = {
        name,
        email,
        phone,
        address,
        message,
    }
    return (
        <Box
            sx={{
                p : '20px'
            }}
        >
            {
                submitted
                ?
                <Box
                    textAlign="center"
                >
                    <CheckCircleIcon color="primary" fontSize='large'/>
                    <Typography
                        variant='p'
                        sx={{
                            fontWeight : '600',
                            fontSize : '16px',
                            display : 'block',
                            mt : '20px',
                            mb : '20px'
                        }}
                    >
                        Your details are saved successfully, Our service agent will contact you within 24 hours.
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Box>
                :
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={Yup.object({
                        name : Yup.string().required('Required'),
                        email : Yup.string().email('Enter valid email').required('Required'),
                        phone : Yup.number().test('len', 'Phone number must be of 10 digits', val => val.toString().length === 10).required('Required'),
                        message : Yup.string().required('Required'),
                        // service : Yup.string().required('Required'),
                    })}
                >
                {({ isSubmitting, errors, touched }) => (
                    <Form
                        onSubmit={submitFormData}
                    >
                        <Field
                            component={TextField}
                            name="name"
                            value={name}
                            error={!!errors.name && touched.name}
                            helperText={errors.name && touched.name ? errors.name : ''}
                            onChange={(e)=> setName(e.target.value)}
                            fullWidth
                            size='small'
                            label="Name"
                            placeholder='Enter Name'
                            sx={{
                                mb : '20px'
                            }}
                        />
                        <Field
                            component={TextField}
                            name="email"
                            value={email}
                            error={!!errors.email && touched.email}
                            helperText={errors.email && touched.email ? errors.email : ''}
                            onChange={(e)=> setEmail(e.target.value)}
                            fullWidth
                            size='small'
                            label="Email"
                            placeholder='Enter email'
                            sx={{
                                mb : '20px'
                            }}
                        />
                        <Field
                            component={TextField}
                            name="phone"
                            value={phone}
                            type="number"
                            error={!!errors.phone && touched.phone}
                            helperText={errors.phone && touched.phone ? errors.phone : ''}
                            onChange={(e)=> setPhone(e.target.value)}
                            fullWidth
                            size='small'
                            label="Phone Number"
                            placeholder='Enter Phone Number'
                            sx={{
                                mb : '20px'
                            }}
                        />
                        <Field
                            component={TextField}
                            name="address"
                            value={address}
                            error={!!errors.address && touched.address}
                            helperText={errors.address && touched.address ? errors.address : ''}
                            onChange={(e)=> setAddress(e.target.value)}
                            fullWidth
                            size='small'
                            label="Address"
                            placeholder='Complete Address'
                            sx={{
                                mb : '20px'
                            }}
                            
                        >
                           
                        </Field>
                        <Field
                            component={TextField}
                            multiline
                            rows={5}
                            name="message"
                            value={message}
                            error={!!errors.message && touched.message}
                            helperText={errors.message && touched.message ? errors.message : ''}
                            onChange={(e)=> setMessage(e.target.value)}
                            fullWidth
                            size='small'
                            label="Message"
                            placeholder='Enter Message'
                            sx={{
                                mb : '20px'
                            }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {
                                isSubmitting
                                ?
                                <CircularProgress 
                                    size={18}
                                />
                                :
                                "Save"
                            }
                        </Button>
                    </Form>
                )}
                </Formik>
            }
        </Box>
    )
}

SubmitForm.propTypes = {
    handleClose : PropTypes.func.isRequired,
    subCategoryId : PropTypes.number.isRequired,
}

export default SubmitForm
