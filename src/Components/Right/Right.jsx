import React from 'react'
import './Right.css';

function Right() {
  return (
    <div className='right'>
        <div className='right-header'>
            <h5>Choose a plan that's just right for you</h5>
            <div className='plan'>
                <h5>
                    Monthly
                </h5>
                <h5>Annually</h5>
            </div>
        </div>
        <div className='right-content'>
            <div className='rowone'>
                <div className='basic'>
                    <h5> Basic</h5>
                    <small></small>
                    <h5></h5>
                    <button>Get Started</button>
                    <hr />
                    <small>What you'll get</small>
                    <small>Upto 25 users</small>
                    <small>Up to 25 gb storage</small>
                    <small>Email Support</small>

                    </div>
                <div className='standard'> <h5> Starter</h5>
                    <small></small>
                    <h5></h5>
                    <button>Get Started</button>
                    <hr />
                    <small>What you'll get</small>
                    <small>Upto 25 users</small>
                    <small>Up to 25 gb storage</small>
                    <small>Email Support</small></div>
                <div className='premium'> <h5>Premium</h5>
                    <small></small>
                    <h5></h5>
                    <button>Get Started</button>
                    <hr />
                    <small>What you'll get</small>
                    <small>Upto 25 users</small>
                    <small>Up to 25 gb storage</small>
                    <small>Email Support</small></div>
            </div>
            <div className='rowtwo'>
                <div className='starter'> <h5> Starter</h5>
                    <small></small>
                    <h5></h5>
                    <button>Get Started</button>
                    <div><small>What you'll get</small>
                    <small>Upto 25 users</small>
                    <small>Up to 25 gb storage</small>
                    <small>Email Support</small></div>
                    </div>
                <div className='enterprise'><h5> Enterprise plan</h5>
                    <small></small>
                    <h5></h5>
                    <button>Get Started</button>
                    <div><small>What you'll get</small>
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