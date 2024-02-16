import React from 'react';
import { Email } from './contact';
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

function ContactUs(prop) {
  return (
    <div id='contact' className='bg-sky-30 h-screen flex md:py-auto py-20 '>
      <div className='container md:p-10 mx-auto h-[80vh]'>
      <div className='lg:grid grid-cols-2 gap-3 justify-between text-center my-6 items-center'>
        <div className='border px-10 mb-10 w-3/4 mx-auto md:py-10 py-18'>
        <h1 className='flex text-xl mb-4 text-gray-500 items-start border-spacing-12 border-slate-100'>Get In Touch!</h1>
            <span></span>
            <ul className='flex flex-col gap-4 text-gray-500 items-start'>
               <li><GiRotaryPhone className='inline'/> <span className='ml-2'>+234 802 454 2386</span></li>
               <li><MdEmail className='inline'/> <span className='ml-2'>gbenz@mail.com</span></li>
               <li><FaAddressCard className='inline'/> <span className='ml-2'>Lagos State, Nigeria</span></li>
            </ul>
            <hr className='w-full text-gray-700 my-5'/>
            <div>
              <p className='w-full px-2 text-gray-500 text-center'>Hi <span className='font-bold italic antialiased'>Friend</span>, I really care about that software 
              project that is bordering you. Hand it over, I <span className='font-bold'>CAN</span> handle it.</p>
            </div>
        </div>
        
       
        <div className='border w-3/4 px-10 mx-auto md:py-10 py-18'>
          <Email />
  {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Your Name" />
    </div>
    <div class="mb-6">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="Email" placeholder="mail@example.com" />
      
    </div>
    <div className="mb-6">
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" type="textarea" placeholder="Message">

      </textarea>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send
      </button>
     
    </div>
  </form> */}
</div>
</div>
</div>
        </div>
   
  )
}

export default ContactUs