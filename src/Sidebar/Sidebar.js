import React from 'react'
import "./sidebar.css"
import ArticleIcon from '@mui/icons-material/Article';
import { Box } from '@mui/material';
function Sidebar() {
  return (
    <div className='side'>
    <Box className='bar'>
      <Box><ArticleIcon/></Box>
      <Box>Creater's Name</Box>
    </Box>
    </div>
  )
}

export default Sidebar