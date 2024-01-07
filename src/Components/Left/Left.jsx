import React from 'react'
import './Left.css';
import userImage from '../../Assets/images/userimage.jpg'
import { MdDashboard } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { MdContactSupport } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa6";
function Left({showSideBar,setShowSideBar}) {
  return (
    <div className={`left ${showSideBar ? 'show-sidebar' : ''}`}>
      <header>
     
      <div className='user'>
            <img src={userImage} alt="" />
            <h5>Ram Mohan</h5>
            <small>rammohan2@gmail.com</small>
        </div>
        <div className='options'>
            <ul>
                <li><MdDashboard className='icon' />Dashboard</li>
                <li><PiPottedPlantFill className='icon' />Perks</li>
                <li><i className="fa-solid fa-puzzle-piece icon"></i>Addons</li>
                <li><MdContactSupport className='icon' />FAQ</li>
                <li><MdOutlineSupportAgent className='icon' />Support</li>
            </ul>
        </div>
      </header>
        
      <div className='logout'>
        <h5>Logout</h5>
        <FaPowerOff />
      </div>

    </div>
  )
}

export default Left