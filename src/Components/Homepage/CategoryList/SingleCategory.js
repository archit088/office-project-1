import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography,Button} from '@mui/material'
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
                    borderRadius : '6px',
                    overflow : 'hidden',
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
                        p : '10px',
                        fontSize : '18px',
                        fontWeight : 'bold'
                    }}
                >
                    {item.name}
                </Typography>
                <Box
                        sx={{
                            p : '10px',
                        }}
                    >
         <Typography variant="p" sx={{textAlign:"left",display:"block"}}>{item.description.substring(0, 140)}</Typography>
                        <Button
                            color="primary"
                            size="small"
                            variant='contained'
                        >
                            View More
                        </Button>
                    </Box>
                
            </Paper>
        </Link>
    )
}

SingleCategory.propTypes = {
    item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default SingleCategory