import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div>
            <h2>Logo</h2>  </div>
        <div className='company'>
            <div className='company-title'>
                <h5>Xyz Pvt Ltd</h5>
            </div>
            <div className='company-icon'>icon</div>
        </div>
    </div>
  )
}

export default Header