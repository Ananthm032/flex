import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button,Box } from '@mui/material';
import "./sidebar.css"
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
     <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
         
        >
           
          <Box className='top'>
            <Box className='top1'>
          
           CreaterName
         
          </Box>
          <Box>
            <Button>Pending</Button>
          </Box>
          </Box>
         
          <Box className='date'>
            June21,2022
           </Box>
      
  
        </AccordionSummary>
      
        <AccordionDetails>
<Box className='simple'>
       <Box className='simple1'> ABOUT</Box>
      <Box className='simple2'>  
        
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
 </Box>  
   </Box>
 
         </AccordionDetails>
     
     </Accordion>
   
     
 )
 }