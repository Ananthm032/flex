
import './flex.css';
import Img from "../Images/logo.png"
import Img2 from "../Images/147144.png"

import ArticleIcon from '@mui/icons-material/Article';
import {Box}from "@mui/material"

import {Link} from "react-router-dom"
function Flex() {
  return (
    <div  className='flexo'>
 <header>
 
  <Box className='boxo'>
  <Box> <img src={Img} alt='' height='148px' width='250px' /></Box>
  <Box> <p>Admin</p>
  </Box>
  </Box>
  <Box >
  <Link to='/'> <img src={Img2} alt='' width='30' height='30px'/></Link> 
  </Box>
  
 
  </header>

  <div class="flex-containero">
 
    <section class="menuo">
            <Box className='logoo'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
            </Box>
    </section>

    
    <section class="contento">
     <Box className='minio'>
       <Link to='/review' style={{textDecoration:'none',color:'lightgray'}}> <Box className='mini1o'> <p> For review</p></Box></Link>
      <Link to='/verified' style={{textDecoration:'none',color:'lightgray'}}><Box className='mini2o'>  <p> Verified</p></Box></Link>
      <Link to='/rejected' style={{textDecoration:'none',color:'lightgray'}}>  <Box className='mini3o'>  <p> Rejected</p></Box></Link>
     </Box>
   
       
    </section> 
     </div>
       </div>
  );
}

export default Flex;