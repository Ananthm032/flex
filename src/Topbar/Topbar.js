
import './topbar.css';
import Img from "../Images/logo.png"
import Img2 from "../Images/147144.png"

import ArticleIcon from '@mui/icons-material/Article';
import {Box}from "@mui/material"
function Topbar() {
  return (
    <div  className='flex'>
 <header>
 
  <Box className='box'>
  <Box> <img src={Img} alt='' height='150px' width='150px' /></Box>
  <Box> <p>Admin</p>
  </Box>
  </Box>
  <Box >
    <img src={Img2} alt='' width='30' height='30px'/>
  </Box>
  
 
  </header>

  <div class="flex-container">
 
    <section class="menu">
            <Box className='logo'>
             
               <p><ArticleIcon/></p> 
            
              <p>Creater's Application</p>
            </Box>
    </section>

    
    <section class="content">
     <Box className='mini'>
      <Box className='mini1'> <p> For review</p></Box>
      <Box className='mini2'>  <p> For review</p></Box>
      <Box className='mini3'>  <p> For review</p></Box>
     </Box>
    </section> 

  </div>
    </div>
  );
}

export default Topbar;