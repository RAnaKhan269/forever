import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className=''>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} alt="Company Logo" className='mb-5 w-32'/>
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum is just dummy text
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href="/" className='hover:text-gray-800'>Home</a></li>
            <li><a href="/about" className='hover:text-gray-800'>About Us</a></li>
            <li><a href="/delivery" className='hover:text-gray-800'>Delivery</a></li>
            <li><a href="/privacy-policy" className='hover:text-gray-800'>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href="tel:+923230095269" className='hover:text-gray-800'>Tel: (323) 009-5269 </a></li>
            <li><a href="mailto:contact@forever.com" className='hover:text-gray-800'>contact@forever.com</a></li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='text-gray-600 text-center py-5 text-sm'>
          &copy; {currentYear} forever.com. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
