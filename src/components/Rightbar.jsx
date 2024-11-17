import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Girl from '../mui2/GIRL.jpeg'
import Profile from '../mui2/profil - Copy.webp'
import Profile2 from '../mui2/Profile2.jpeg'
import Profile3 from '../mui2/profileGirl.jpeg'
import Profile4 from '../mui2/profileGirl2.jpeg'
import Riksen from '../mui2/riksen.jpg'
import Prof from '../mui2/prof.jpeg'
import Hair from '../mui2/hair.jpeg'
import Two from '../mui2/two3.jpg'

function Rightbar() {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    }
    
  ];
  return (
    <Box sx={{display:{xs:'none',sm:'block'}}}  p={2} flex={2}>
    <Box position={'fixed'} width={300}>
      <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
      <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src={Girl}/>
      <Avatar alt="Travis Howard" src={Riksen}/>
      <Avatar alt="Cindy Baker" src={Profile2}/>
      <Avatar alt="Agnes Walker" src={Profile3}/>
      <Avatar alt="Trevor Henderson"/>
      <Avatar alt="Travis Howard" src={Profile} />
      <Avatar alt="Travis Howard" src={Profile4}/>
      <Avatar alt="Trevor Henderson"/>
      </AvatarGroup>
      <Typography variant='h6' mt={3} mb={3}>Latest Photos</Typography>
      <ImageList sx={{ width: 400, height: 100 }} cols={3} rowHeight={100} gap={5}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography variant='h6' mt={3} mb={3}>Latest Conversations</Typography>
     
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Prof} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={Two}/>
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={Hair}/>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default Rightbar
