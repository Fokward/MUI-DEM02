import { AppBar, Box, InputBase, styled, Toolbar, Typography, Badge, Avatar, MenuItem, Menu } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'
import Girl from '../mui2/GIRL.jpeg'
import Profil from '../mui2/profil - Copy.webp'
import Profil2 from '../mui2/Profile2.jpeg'
import Profile3 from '../mui2/profileGirl.jpeg'
import Profile4 from '../mui2/profileGirl2.jpeg'

const StyledToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
    
})

const Search=styled('div')(({theme})=>({
    backgroundColor:'white',
    padding:'0px 10px',
    borderRadius:theme.shape.borderRadius,
    width:'40%'
}))

const Icons=styled(Box)(({theme})=>({
    display:'none',
    alignItems:'center',
    gap:'20px',
    [theme.breakpoints.up('sm')]:{
        display:'flex'
    }
    
}))

const UserBox=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    [theme.breakpoints.up('sm')]:{
        display:'none'
    }
}))
function Navbar() {
    const [open, setOpen]=useState(false)
  return (
      <AppBar position='sticky'>
        <StyledToolbar >
            <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>riksen</Typography>
            <PetsIcon sx={{display:{xs:'block', sm:'none'}}}/>
            <Search><InputBase placeholder='Search...'  bgcolor={'background.default'} color={'text.primary'}/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
            </Badge>
            <Badge badgeContent={2} color="error">
            <NotificationsIcon />
            </Badge>
            <Avatar alt="Remy Sharp" src={Girl} onClick={e=>setOpen(true)}/>
            </Icons>
            <UserBox>
            <Avatar alt="Remy Sharp" src={Profil2} onClick={e=>setOpen(true)} />
            <Typography>John</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar> 
  )
}

export default Navbar
