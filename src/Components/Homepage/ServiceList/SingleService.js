import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography,Button } from '@mui/material'

function SingleService({item}) {

    return (
        <Paper 
            sx={{
                borderRadius : '8px',
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
            <Box sx={{p:"10px"}}>
            <Typography 
                variant="p"
                sx={{
                    display : 'block',
                    textAlign : 'left',
                    fontWeight : "bold",
                    fontSize : '18px',
                    mt : '10px',
                   
                }}
            >
                {item.name}
            </Typography>
            </Box>
            
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
    )
}

SingleService.propTypes = {
    item : PropTypes.objectOf(PropTypes.any).isRequired
}

export default SingleService