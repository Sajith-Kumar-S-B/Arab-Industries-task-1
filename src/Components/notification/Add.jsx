import React from 'react'
import './Add.css';
import { FaPlus } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
function Add() {
  return (
    <div className='side-icon'>
       <div className='notification'>
       <IoIosNotifications style={{fontSize:"20px"}} />
       </div>
       <div className='add'>

       <FaPlus />

       </div>
    </div>
  )
}

export default Add