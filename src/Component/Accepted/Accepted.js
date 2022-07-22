
import './accepted.css';
import Img from "../../Images/logo.png"
import Img2 from "../../Images/147144.png"
import ArticleIcon from '@mui/icons-material/Article';
import {Box}from "@mui/material"
import Ape from "../../Component/Ape/Ape"
import Verified from "../../Component/Verified/Verified"
import {Link} from "react-router-dom"
function Accepted() {
  return (
    <div  className='flax'>
 <header>
 
  <Box className='bax'>
  <Box> <img src={Img} alt='' height='148px' width='250px' /></Box>
  <Box> <p>Admin</p>
  </Box>
  </Box>
  <Link to='/'> <Box >
    <img src={Img2} alt='' width='30' height='30px'/>
  </Box></Link>
 
  </header>

  <div class="flax-container">
 
    <section class="manu">
            <Box className='loga'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
            </Box>
    </section>

    
    <section class="cantent">
     <Box className='mina'>
     <Link to='/review' style={{textDecoration:'none',color:'lightgray'}}> <Box className='mina1'> <p> For review</p></Box></Link>
      <Link to='/verified' style={{textDecoration:'none',color:'lightgray'}}><Box className='mina2'>  <p> Verified</p></Box></Link>
      <Link to='/rejected' style={{textDecoration:'none',color:'lightgray'}}>  <Box className='mina3'>  <p> Rejected</p></Box></Link>
     </Box>
    <Box>
      <Box className='baa1'>
      <Ape/>
      </Box>
      <Box className='baa'>
      <Verified/>
      </Box>
      </Box>
       
    </section> 
     </div>
       </div>
  );
}

export default Accepted;