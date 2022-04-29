import React from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import './Counter.css'

const Counter = () => {
    return (
        <div className='counter'>
           <div className="container counter-items">
           <div>
            <FontAwesomeIcon className='fs-1 text-white' icon={faCar} /><br />
            <CountUp duration={3} className='fs-1 fw-bold text-white' end={2400} />
            <h5 className='text-danger'>Cars Sold</h5>
            </div>
            <div>
            <FontAwesomeIcon className='fs-1 text-white' icon={faDollarSign} /><br />
            <CountUp duration={3} className='fs-1 fw-bold text-white' end={1034659} />
            <h5 className='text-danger'>Amount Sold</h5>
            </div>
            <div>
            <FontAwesomeIcon className='fs-1 text-white' icon={faUsers} /><br />
            <CountUp duration={3} className='fs-1 fw-bold text-white' end={100} /> <span className='fs-1 fw-bold text-white'>%</span>
            <h5 className='text-danger'>Customer Satisfaction</h5>
            </div>
            <div>
            <FontAwesomeIcon className='fs-1 text-white' icon={faTint} /><br />
            <CountUp duration={3} className='fs-1 fw-bold text-white' end={2520} />
            <h5 className='text-danger'>Oil Changes</h5>
            </div>
           </div>
        </div>
    );
};

export default Counter;