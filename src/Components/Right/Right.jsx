import React, { useState } from 'react'
import './Right.css';
import { PiUserLight } from "react-icons/pi";
import { TiCloudStorageOutline } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { LiaCheckDoubleSolid } from "react-icons/lia";
function Right() {
    
  return (
    <div className='right'>
        <div className='right-header'>
            <h2>Choose a plan that's just right for you !</h2>
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
                   
                 
                  
                    <div className='basic-feature'>
                    <small className='feature-content'>What you'll get:</small>
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
                   
                 
                  
                    <div className='basic-feature'>
                    <small className='feature-content'>What you'll get:</small>
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
                   
                 
                  
                    <div className='basic-feature'>
                    <small className='feature-content'>What you'll get:</small>
                        <span className='feature-content'><PiUserLight /> <small>Upto 25 users</small></span>
                   <span className='feature-content'><TiCloudStorageOutline /> <small>Up to 25 gb storage</small></span>
                     <span className='feature-content'><AiOutlineMail /> <small>Email Support</small></span>
                   
                    </div>
                   </div>
            </div>
            <div className='rowtwo'>
                <div className='starter'> 
                <div className='starter-title'>
                <small className='badge'>free forever</small>
                <h2>Free Starter</h2>
                   <p className='text'>The quickest and easiest way to try Protocols with basic functionalities</p>
                    <button>Get Started <span class="arrow">
                    <i className="fa-solid fa-arrow-right-long"></i></span> </button>
                    </div>
                   
                       
                        <div className='starter-feature'>
                        <small className='feature-content'>What you'll get</small>
                        <small className='feature-content'><PiUserLight /> Upto 25 users</small>
                    <small className='feature-content'><TiCloudStorageOutline />Up to 25 gb storage</small>
                    <small className='feature-content'><AiOutlineMail />Email Support</small>
                    <small className='feature-content'><LiaCheckDoubleSolid style={{fontSize:'25px',marginTop:'-5px'}} />Basics of Documents,Task flow,Voting,Accounting,Banking,Notes, <br />Investor, Director and Team Management Included</small>

                        </div>
                   
                    </div>
                <div className='enterprise'>
                <div className='starter-title'>
                <small className='badge'>let's connect</small>
                <h2>Enterprise Plan</h2>
                   <p className='text'>Effortlessly fine tune and customize services as your need shift, ensuring the perfect tool for success</p>
                    <button>Contact Us <span class="arrow">
                    <i className="fa-solid fa-arrow-right-long"></i></span> </button>
                    </div>
                   
                       
                        <div className='starter-feature'>
                        <small className='feature-content'>What you'll get</small>
                        <small className='feature-content'><PiUserLight /> Upto 75 users</small>
                    
                    <small className='feature-content'><LiaCheckDoubleSolid  />Customization of all other features</small>
                        </div>
            </div>
        </div>
        <div className='condition'>
        <small>*some unique features are provided as add-on with individual plan for each feature</small>
    </div>
    </div>
   
    </div>
  )
}

export default Right