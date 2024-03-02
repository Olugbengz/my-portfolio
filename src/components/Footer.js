import React from 'react';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


function Footer() {
  return (
    <div className='bg-slate-100 h-100vh flex flex-col pt-0 pb-16'>
      {/* <div className='container flex items-center m-auto h-3/4'> */}
        <div className='lg:grid mt-20 md:mt-28  grid-cols-4 gap-8 items-center justify-between m-auto pb-3 border-b-2 '>
          <div className='col-span-2 sm:grid-cols-1 md:text-2xl text-xl font-semibold px-6 py-4 mb-4 border-2 border-gray-200 rounded-lg text-black-900 w-4/4 md:h-96  h-64'>
            <h3> <span><i>Olugbeng_</i></span> Z</h3>

            <ul className='duration-100 flex flex-col gap-2 items-start text-lg underline pt-3 text-gray-700 font-light '>
                  <li> <a href='#about' className='block hover:text-amber-500 '>About</a></li>
                  <li><a href='#projects' className='block hover:text-amber-500 '>Project</a></li>
                  <li><a href='#contact' className='block hover:text-amber-500 '>Blog</a></li>
                  <li><a href='#contact' className='block hover:text-amber-500 '>Contact</a></li>                  
                  
                </ul>
          </div>
          
          <div className='md:text-2xl text-xl font-semibold px-6 py-4 mb-4 border-2 border-gray-200 rounded-lg text-black-900 w-64 md:h-96 h-64'>
            <h3>Contacts</h3>
          </div>
          <div className='md:text-2xl text-xl font-semibold px-6 py-4 mb-4 border-2 border-gray-200 rounded-lg text-black-900 w-64 md:h-96 h-64 '>
            <h3>Social</h3>
            <div className='flex gap-3 text-gray-500 text-xl px-3 py-6 pl-0'>
                <a href='https://www.linkedin.com/in/olugbenga-okundaye-a7890945/'><SlSocialLinkedin /></a>
                <a href=''><FaXTwitter /></a>
                <a href=''><FaInstagram /> </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-xs md:text-sm md:m-auto md:py-4 font-normal">
        <p>© Copyright 2024 <span> <em className='font-medium'>Olugbeng_z.</em> All right reserved. </span> </p>
       </div>


        

            {/* </div> */}

    </div>
  )
}

export default Footer