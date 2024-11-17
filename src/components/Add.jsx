import { Avatar, Box, Button, ButtonGroup, Fab,Modal,Stack,styled,TextField,Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Girl from '../mui2/GIRL.jpeg'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import DateRangeIcon from '@mui/icons-material/DateRange'

 const StyledModal=styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
 })

 const UserBox=styled(Box)({
    display:"flex",
    alignItems:'center',
    gap:'10px',
    marginBottom:'20px'
 })
function Add() {
    const[open,setOpen]=useState(false)
  return (
    <>
      <Tooltip title="Delete" sx={{position:'fixed',bottom:20, left:{xs:'calc(50%-25px)',md:30}}} onClick={e=>setOpen(true)}>
      <Fab color='primary' aria-label='add'>
      <AddIcon />
      </Fab>
      </Tooltip>
      <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} borderRadius={5} bgcolor={'background.default'} color={'text.primary'} p={3}>
    <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
    <UserBox>
        <Avatar src={Girl} sx={{width:30, height:30}}/>
        <Typography variant='span' fontWeight={500}>Judith Tesha</Typography>
    </UserBox>
    <TextField multiline rows={3} placeholder="What's on your mind"  variant='standard' sx={{width:'100%'}}/>
    <Stack direction='row' gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color='primary'/>
        <ImageIcon color='secondary'/>
        <VideoCameraBackIcon color='success'/>
        <PersonAddIcon color='error'/>
    </Stack>
    <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
    <Button>Post</Button>
    <Button sx={{width:'100px'}}><DateRangeIcon/></Button>
    </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add
