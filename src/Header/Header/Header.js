import './header.css';
import Img from "../../Images/logo.png"
import Img2 from "../../Images/147144.png"
import ArticleIcon from '@mui/icons-material/Article';
import {Box}from "@mui/material"
import Footer from "../../Header/Footer/Footer"
import Contant from "../../Header/Contant/Contant"
import {Link} from "react-router-dom"
function Head() {
  return (
    <div  className='flee'>
 <header>
 
  <Box className='boxe'>
  <Box> <img src={Img} alt='' height='148px' width='250px' /></Box>
  <Box> <p>Admin</p>
  </Box>
  </Box>
  <Link to='/'> <Box >
    <img src={Img2} alt='' width='30' height='30px'/>
  </Box></Link>
  
 
  </header>

  <div class="flex-containere">
 
    <section class="menue">
            <Box className='logoe'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
            </Box>
    </section>

    
    <section class="contente">
     <Box className='minie'>
     <Link to='/review' style={{textDecoration:'none',color:'lightgray'}}> <Box className='minie1'> <p> For review</p></Box></Link>
      <Link to='/verified'style={{textDecoration:'none',color:'lightgray'}}><Box className='minie2'>  <p> Verified</p></Box></Link>
      <Link to='/rejected' style={{textDecoration:'none',color:'lightgray'}}>  <Box className='minie3'>  <p> Rejected</p></Box></Link>
     </Box>
    <Box>
      <Box className='bare1'>
      <Footer/>
      </Box>
      <Box className='bare'>
       <Contant/>
      </Box>
      </Box>
       
    </section> 
     </div>
       </div>
  );
}

export default Head;