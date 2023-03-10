import React from 'react'
import logoBanner from '../../asset/header-logo.jpeg'


const Hero = () => {
  return (
    <div className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
    {/* Overlay */}
    <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        <div className='p-5 text-white z-[2]  mt-[-5rem]'>
            <img src={logoBanner} alt='logo' width={300} />
            <p className='py-5 text-xl'>Means "I like weed" in Japanse</p>
            <button className='py-2 px-8 border'><a href="#products">Shop Now</a></button>
        </div>
    </div>
  )
}

export default Hero