import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function SingleCategory({item}) {
    return (
        <Link
            to={`/sub-category/${item.id}`}
            style={{
                textDecoration : 'none'
            }}
        >
            <Paper 
                sx={{
                    p : '20px',
                    boxShadow : '0px 0px 4px #ccc',
                    '&:hover' : {
                        cursor : 'pointer',
                        boxShadow : '0px 0px 16px #ccc'
                    }
                }}
            >
                <Box
                    sx={{
                        height : '200px',
                        backgroundImage : `url(${item.files[0].file})`,
                        backgroundSize : 'cover'
                    }}
                />
                <Typography 
                    variant="p"
                    sx={{
                        display : 'block',
                        textAlign : 'left',
                        mt : '10px',
                        fontWeight : 600
                    }}
                >
                    {item.name}
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        display : 'block',
                        textAlign : 'left',
                        mt : '5px',
                        fontSize : '14px'
                    }}
                >
                    {item.description}
                </Typography>
            </Paper>
        </Link>
    )
}

SingleCategory.propTypes = {
    item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default SingleCategory