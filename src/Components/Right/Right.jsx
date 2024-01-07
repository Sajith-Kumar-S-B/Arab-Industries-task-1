import React, { useState } from 'react'
import './Right.css';
import { PiUserLight } from "react-icons/pi";
import { TiCloudStorageOutline } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
function Right() {
    
  return (
    <div className='right'>
        <div className='right-header'>
            <h2>Choose a plan that's just right for you</h2>
            <div>
            <label className="switch btn-color-mode-switch">
      <input type="checkbox" name="color_mode" id="color_mode" value="1" />
      <label htmlFor="color_mode" data-on="Annually" data-off="monthly" className="btn-color-mode-switch-inner"></label>
    </label>

      
  
            </div>
        </div>
        <div className='right-content'>
            <div className='rowone'>
                <div className='basic'>
                    <div className='basic-title'>
                    <h2> Basic</h2>
                    <small>$ 89.99/mo</small>
                    <h4>$ 9.99/mo</h4>
                    <button>Get Started  <span class="arrow">
                    <i className="fa-solid fa-arrow-right-long"></i></span> </button>
                    </div>
                   
                 
                    <small>What you'll get:</small>
                    <div className='basic-feature'>
                        <span className='feature-content'><PiUserLight /> <small>Upto 25 users</small></span>
                   <span className='feature-content'><TiCloudStorageOutline /> <small>Up to 25 gb storage</small></span>
                     <span className='feature-content'><AiOutlineMail /> <small>Email Support</small></span>
                   
                    </div>
                   

                    </div>
                <div className='standard'> <div className='basic-title'>
                    <h2> Standard</h2>
                    <small>$ 189.99/mo</small>
                    <h4>$ 99.99/mo</h4>
                    <button>Get Started  <span class="arrow">
                    <i className="fa-solid fa-arrow-right-long"></i></span> </button>
                    </div>
                   
                 
                    <small>What you'll get:</small>
                    <div className='basic-feature'>
                        <span className='feature-content'><PiUserLight /> <small>Upto 25 users</small></span>
                   <span className='feature-content'><TiCloudStorageOutline /> <small>Up to 25 gb storage</small></span>
                     <span className='feature-content'><AiOutlineMail /> <small>Email Support</small></span>
                   
                    </div>
                   </div>
                <div className='premium'> <div className='basic-title'>
                    <h2>Premium</h2>
                    <small>$ 389.99/mo</small>
                    <h4>$ 199.99/mo</h4>
                    <button>Get Started  <span class="arrow">
                    <i className="fa-solid fa-arrow-right-long"></i></span> </button>
                    </div>
                   
                 
                    <small>What you'll get:</small>
                    <div className='basic-feature'>
                        <span className='feature-content'><PiUserLight /> <small>Upto 25 users</small></span>
                   <span className='feature-content'><TiCloudStorageOutline /> <small>Up to 25 gb storage</small></span>
                     <span className='feature-content'><AiOutlineMail /> <small>Email Support</small></span>
                   
                    </div>
                   </div>
            </div>
            <div className='rowtwo'>
                <div className='starter'> <h5> Starter</h5>
                    <small></small>
                    <h5></h5>
                    <button>Get Started</button>
                    <div className='feature'><small>What you'll get</small>
                    <small>Upto 25 users</small>
                    <small>Up to 25 gb storage</small>
                    <small>Email Support</small></div>
                    </div>
                <div className='enterprise'><h5> Enterprise plan</h5>
                    <small></small>
                    <h5></h5>
                    <button>Get Started</button>
                    <div className='feature'><small>What you'll get</small>
                    <small>Upto 25 users</small>
                    <small>Up to 25 gb storage</small>
                    <small>Email Support</small></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Right