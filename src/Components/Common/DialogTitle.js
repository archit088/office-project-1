/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { PropTypes } from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitle, IconButton, Typography } from '@mui/material'
import Logo from '../../Assets/Images/slogo11.png'

const CustomDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  
  return (
    <DialogTitle 
        sx={{ 
            m: 0, 
            p: 2,
            background: (theme) => theme.palette.primary.main,
            textAlign: 'center',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
        {...other}
    >
      <img src={Logo} alt="company_logo" width={70} height={30}/>
        <Typography 
            variant="h1"
            sx={{
                color : '#ffffff',
                fontWeight : '500',
                fontSize : '18px',
                letterSpacing : '0px'
            }}
        >
            {children}
        </Typography>
        {
            onClose ? (
                <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    color: '#ffffff',
                    border: '1px solid #ffffff',
                }}
                size="small"
                >
                    <CloseIcon />
                </IconButton>
            ) 
            : 
            null
        }
    </DialogTitle>
  )
};

CustomDialogTitle.propTypes = {
    children: PropTypes.node.isRequired,
    onClose : PropTypes.func.isRequired,
}

export default CustomDialogTitle