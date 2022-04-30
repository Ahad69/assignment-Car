import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WhyUs.css'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'




const WhyUs = () => {
    return (
      
        <div className='container mt-5'>
                  <h1 className='text-center mb-4'>Why Choose Us</h1>
           <div className='whyUs'>
           <div className='cards'>
               <div className='whyUs1 m-auto'><FontAwesomeIcon className='text-danger' icon={faTag} /> </div>
                <br />
                <h4>Best Price</h4>
                <br />
                <p>We supplies the most low price rates. You buy our cars at very cheap rate and can save money.</p>
            </div>
            <div className='cards'>
               <div className='whyUs2 m-auto'><FontAwesomeIcon className='text-success' icon={faShield} /> </div>
               <br />
                <h4>Trusted By Thousands</h4>
                <br />
                <p>We can guarantee about our products. that's why we are trusted by thousands of the people.</p>
            </div>
            <div className='cards'>
               <div className='whyUs3 m-auto'><FontAwesomeIcon className="text-info" icon={faSlidersH} />  </div>
               <br />
                <h4>Wide Range of Brands</h4>
                <br />
                <p>We can make sure about brands. We always try to use branded products to all of clients .</p>
            </div>
           </div>
        </div>
    );
};

export default WhyUs;