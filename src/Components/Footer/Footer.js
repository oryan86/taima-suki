import React from 'react'
import {SiInstagram, SiFacebook } from 'react-icons/si'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-[100px] px-48 py-5  bg-gray-300 '>
    {/* Top */}
      <div className='flex gap-12'>
        <div className='flex flex-col flex-1 gap-2'>
          <p className='text-sm font-bold'>Categories</p>
          <div>
            <Link to="/products/1">Men</Link>
          </div>
          <div>
            <Link to="/products/2">Women</Link>
          </div>
          <div>
            <Link to="/products/3">Headwear</Link>
          </div>
        </div>
        <div className='flex flex-col flex-1 gap-2'>
          <p className='text-sm font-bold'>Links</p>
          <span>FAQ</span>
          <span>Our Story</span>
          <span>Returns & Exchanges</span>
          <span>Shipping & Tracking</span>
        </div>
        <div className='flex flex-col flex-1 gap-2'>
          <p className='text-sm font-bold'>Stay Connected</p>
          {/* Social Links */}
          <div className='flex gap-2 cursor-pointer'>
          <SiInstagram />
          <SiFacebook />
          </div>
        </div>
        <div className='flex flex-col flex-1 gap-[10px]'>
          <p className='text-sm font-bold'>Newsletter</p>
          <p>info@taimasuki.com</p>
          <input type="email" name="email" placeholder='Your email' className=' border p-1'/>
          <button className='bg-black text-white p-2 mt-1'>Sign me up!</button>
        </div>
      </div>

      {/* Bottom */}
      <div className='flex items-center justify-between mt-12'>
        {/* left */}
        <div className='flex items-center'>
          <span> Taima Suki</span>
          <span className='ml-5 text-gray-500 text-sm'>Copyright © 2023, Taima Suki</span>
        </div>
        {/* right */}
        <div>
          <img src='/img/payment.png' alt='payment logo' width={250} height={50}/>
        </div>
      </div>
    </div>
  )
}

export default Footer