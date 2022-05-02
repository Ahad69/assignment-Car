import React from 'react';
import './Footer.css'

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <div className="footer">
            <h1 className='text-white text-center pt-2'>Car Corners</h1>
           <h5 className='text-white text-center pt-2'> Copyright &copy; {year}</h5>
        </div>
    );
};

export default Footer;