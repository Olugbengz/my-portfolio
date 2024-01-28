import React from 'react';
// import { useRef } from 'react';
// import About from './About';
// import { Link } from 'react-router-dom';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Hero() {

  // const about = useRef(nul)
  // const projects = useRef(nul)
  // const contact = useRef(nul)

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: 'smooth'
  //   })
  // }

  return (
    <main className='bg-slate-50 h-screen'>
        <nav className='py-5 bg-white sticky top-0 border-b border-gray-200'>
        <div className='container md:px-12 md:flex md:items-center md:justify-between'>
            {/* <div className='flex items-center justify-evenly'> */}
              <div>
              <a href='#ContactUs' className='text-start'>
                  <span className='text-2xl text-gray-900 font-Rubik'><i>Olugbeng_</i>Z</span>
                </a>
              </div>              

                <span className='block mx-2 text-3xl bg-gray-200 p-2 rounded-lg md:hidden'>
                  <svg name='menu' onclick='Menu(this)' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
                <div>
                  <ul className='flex gap-5 items-center justify-between'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#projects'>Project</a></li>
                    <li><a href='#contact'>Contact</a></li>
                  </ul>
                </div>  

            </div>
        {/* </div> */}
    </nav>

    <div className='flex flex-col items-center justify-between m-auto md:mt-12 mt-10 w-2/3 gap-3 text-center'>

    <div className='  bg-gradient-to-b from-gray-400 mb-2 rounded-full md:w-56 md:h-56 h-40 w-40'>
      <img className='h-40 w-40 pt-20 mx-auto' src='./images/olugbenga1.png' alt='Olugbenga Okundaye' />
    </div>

      <div>
        <h1 className='md:text-3xl text-base font-black'>
          Python-Django Developer
        </h1>
      </div>
      <p className='md:text-xl text-base font-semibold'>
      Meet <span className='text-indigo-800'><b>Olugbenga Okundaye</b></span>, an ambitious Python and Django developer who thrives on the excitement of 
      full-stack programming. With a passion for crafting seamless and user-friendly applications, 
      Olugbenga dedicates his time and energy to mastering the art of front-end development.
    <br />
      <button  className='bg-indigo-800 italic font-thin hover:bg-blue-700 border-2 border-amber-50 text-white mt-4 py-2 px-4 rounded-full'>More... </button>
      </p>
      
    </div>
    <div className='absolute right-1 bottom-1 text-gray-800 text-2xl flex items-center justify-between w-40 p-4 border-2 rounded-md border-slate-200'>
    
        <SlSocialLinkedin />
        <FaXTwitter />
        <FaInstagram />
      
    </div>
      
    </main>
    
  )
}

export default Hero