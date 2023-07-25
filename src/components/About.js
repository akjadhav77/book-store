import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography variant='h2'>
          This is a CRUD application
        </Typography>
        <Typography variant='h2'>made using MERN stack!</Typography>
      </Box>
    </>
  )
}

export default About