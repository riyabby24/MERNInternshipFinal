import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
          <Link to={'/'}><Button style={{color:'white'}}>Home</Button></Link>
          <Link to={'/add'}><Button style={{color:'white'}}>Add</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar


