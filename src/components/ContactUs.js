import React from 'react';
import { Email } from './contact';
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

function ContactUs(prop) {
  return (
    <div id='contact' className='bg-slate-50 h-auto flex flex-col md:py-auto py-20 '>
      <div className='container md:p-10 mx-auto h-auto'>
      <div className='lg:grid grid-cols-2 gap-1 justify-between text-center my-6 items-center'>
        <div className='px-10 mb-10 w-3/4 mx-auto md:py-10 py-18'>
        <h1 className='flex text-xl mb-4 text-gray-500 items-start border-spacing-12 border-slate-100'>Get In Touch!</h1>
            <span></span>
            <ul className='flex flex-col gap-4 text-gray-500 items-start'>
               <li><GiRotaryPhone className='inline'/> <span className='ml-2'>+234 911 038 7781</span></li>
               <li><MdEmail className='inline'/> <span className='ml-2'>info@olugbengz.com.ng</span></li>
               <li><FaAddressCard className='inline'/> <span className='ml-2'>Lagos State, Nigeria</span></li>
            </ul>
            <hr className='w-full text-gray-700 my-5'/>
            <div>
              <p className='w-full px-2 text-gray-500 text-center'>Hi <span className='font-bold italic antialiased'>Friend</span>, I really care about that software 
              project that is bordering you. Hand it over, I <span className='font-bold'>CAN</span> handle it.</p>
            </div>
        </div>
        
       
        <div className='w-3/4 px-4 py-4 md:px-10 mx-auto md:py-10 py-18'>
          <Email />
  
</div>
</div>
</div>
        </div>
   
  )
}

export default ContactUs