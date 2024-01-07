import React from 'react'
import './Header.css';
import { IoIosArrowDown } from "react-icons/io";
import companyLogo from '../../Assets/images/transition.webp'
import plogo from '../../Assets/images/plogo.jpg'
function Header() {
  return (
    <>
      <div className='header'>
       
       <div className='company'>
           <div className='company-title'>
             <img src={companyLogo} alt="" />
               <h5>XYZ Enterprises Pvt Ltd</h5>
           </div>
           <div className='company-icon'><IoIosArrowDown /></div>
       </div>
      
   </div>
   <div className='logo'>
    <div className='logoImage'>
    <img src={plogo} alt="" />
    </div>
        
          </div>
    </>
    
  )
}

export default Header