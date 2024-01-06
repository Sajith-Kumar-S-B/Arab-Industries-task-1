import React from 'react'
import './Left.css';
import userImage from '../../Assets/images/userimage.jpg'
import { MdDashboard } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { MdContactSupport } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
function Left() {
  return (
    <div className='left'>
        <div className='user'>
            <img src={userImage} alt="" />
            <h5>Ram Mohan</h5>
            <small>rammohan2@gmail.com</small>
        </div>
        <div className='options'>
            <ul>
                <li><MdDashboard />Dashboard</li>
                <li><PiPottedPlantFill />Perks</li>
                <li><i className="fa-solid fa-puzzle-piece"></i>Addons</li>
                <li><MdContactSupport />FAQ</li>
                <li><MdOutlineSupportAgent />Support</li>
            </ul>
        </div>
      <div>
        <h5>Logout</h5>
      </div>
    </div>
  )
}

export default Left