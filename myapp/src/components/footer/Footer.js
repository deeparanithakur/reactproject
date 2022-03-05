import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div>
              <br/><br/><br/><br/><br/><br/><br/>
              
         <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
         <MDBContainer className='p-4'>
         <MDBRow>
         <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            
             <p>
              Copy right reserved 2022
            </p>
        </MDBCol>
            
                
       </MDBRow>
       </MDBContainer>

       </MDBFooter>

      </div>
   );
};
export default Footer;