import * as React from 'react';
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container, TextField } from '@mui/material';
import Logo from '../../Assets/Images/slogo11.png'
import useWidth from '../../helper/widthCalculate';
// import NavbarLower from './NavbarLower';

export default function Navbar() {
  const navigate = useNavigate()
  const width = useWidth()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const loggedIn = localStorage.getItem('loggedIn');
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
    handleMenuClose()
    handleMobileMenuClose()
  }

  const handleLogin =() => {
    handleMenuClose()
    navigate('/login')
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {
        loggedIn 
        ?
        <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      :
      <MenuItem onClick={handleLogin}>Login/Signup</MenuItem>
      }
      
    </Menu>
  );

  return (
    <Box
      sx={{
        backgroundColor : 'primary'
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary">
          <Container>
            <Toolbar
              sx={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'space-between'
              }}
            >
              <Link
                to="/"
              >
                <img
                  src={Logo}
                  alt="logo"
                  height={['xs', 'sm'].includes(width) ? 40 : 70}
                  width={['xs', 'sm'].includes(width) ? 90 : 150}
                  />
              </Link>
              <TextField
                size="small"
                placeholder='Search'
                sx={{
                  padding : '0px',
                  background : '#fff',
                  borderRadius : '20px',
                  '& input' : {
                    padding : ['xs', 'sm'].includes(width) ? '8.5px 16px' : '8px 16px',
                    fontSize : ['xs', 'sm'].includes(width) ? '12px' : '14px'
                  },
                  '& fieldset' : {
                    border : 'none'
                  }
                }}
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {
                  loggedIn
                  ?
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  > 
                    <AccountCircle fontSize='large' />
                  </IconButton>
                  :
                <Button variant="outlined" color="secondary" onClick={handleLogin}>Login/Sign Up</Button>
                }
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box sx={{height : ['xs', 'sm'].includes(width) ? '45px' : '75px'}} />
      {/* {
        lower && (
          <NavbarLower />
        )
      } */}
    </Box>
  );
}

Navbar.defaultProps = {
  lower : true
}

Navbar.propTypes = {
  lower : PropTypes.bool
}