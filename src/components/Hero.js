import React from 'react';
import { useState } from 'react';
// import About from './About';
// import { Link } from 'react-router-dom';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Hero() {

  const [isOpen, setIsOpen] = useState(false);
  // const [menuItemClicked, setMenuItemClicked] = useState(false);
  // const menuRef = useRef(null);
  // const buttonRef = useRef(null);

  function handleClick() {
   
      setIsOpen(!isOpen)
  }

  // function handleMenuItemClicked() {

  // }

  // function outSideMenuClick(e) {
  //   if (menuRef.current && !menuRef.current.contains(e.target) && e.target !== buttonRef.current) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', outSideMenuClick);
  //   return (() => {
  //     document.removeEventListener('mousedown', outSideMenuClick)
  //   })
  // }, []);



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
        <nav className='py-2 bg-white sticky top-0 border-b border-gray-200'>
        <div className='container px-2 md:ml-10 flex items-center justify-between'>
            {/* <div className='flex items-center justify-evenly'> */}
              <div>
              <a href='#ContactUs' className='text-start'>
                  <span className='text-2xl text-gray-900 font-bold cursor-pointer font-Rubik'><i>Olugbeng_</i>Z</span>
                </a>
              </div>

              <div class="-mr-2 md:hidden flex grow justify-end">
                <button  type="button" onClick={handleClick} aria-haspopup="true" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <span className='block mx-2 text-3xl bg-gray-200 p-2 rounded-lg'>
                  <svg name='menu' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
                </button>
            </div>  

              {isOpen ? (
                   
                   <ul className='grow flex gap-3 items-center justify-end text-gray-700 font-medium absolute md:relative md:flex-row top-[-300px] md:top-[inherit]'>
                   <li> <a href='#about' className='block hover:text-amber-500 px-3 py-2'>About</a></li>
                   <li><a href='#projects' className='block hover:text-amber-500 px-3 py-2'>Project</a></li>
                   <li><a href='#contact' className='block hover:text-amber-500 px-3 py-2'>Contact</a></li>
                   <button className='btn bg-blue-600 text-white font-normal rounded-full py-2 px-3'>Follow Me!</button>
                 </ul>
                 
                ) : (
                  <ul className='duration-100 grow flex gap-3 items-center justify-end text-gray-700 font-medium absolute md:relative flex-col top-[100px]'>
                  <li> <a href='#about' className='block hover:text-amber-500 px-2 py-2'>About</a></li>
                  <li><a href='#projects' className='block hover:text-amber-500 px-2 py-2'>Project</a></li>
                  <li><a href='#contact' className='block hover:text-amber-500 px-2 py-2'>Contact</a></li>
                  <button className='btn bg-blue-600 text-white font-normal rounded-full py-2 px-3'>Follow Me!</button>
                </ul>
                )} 

                                
                 
            

            {/* </div> */}
        </div>

   

    </nav>

    <div className='flex flex-col items-center justify-between m-auto md:mt-12 mt-10 w-2/3 gap-3 text-center'>

    <div className='  bg-gradient-to-b from-gray-400 mb-2 rounded-full md:w-56 md:h-56 h-40 w-40 overflow-clip'>
      <img className='md:h-50 md:w-50 h-25 w-25 pt-3 md:pt-7 mx-auto' src={require("./images/olugbenga1.png")} alt='Olugbenga Okundaye' />
    </div>

      <div>
        <h1 className='md:text-3xl text-base font-black'>
          Python-Django Developer
        </h1>
      </div>
      <p className='md:text-xl text-base font-semibold'>
      Meet <span className='text-4xl font-serif italic antialiased text-indigo-800'><b>Olugbenga Okundaye</b></span>, an ambitious Python and Django developer who thrives on the excitement of 
      full-stack programming. With a passion for crafting seamless and user-friendly applications, 
      Olugbenga dedicates his time and energy to mastering the art of front-end development.   
            
      </p>
      
      <a href='#about' className='bg-indigo-800 italic font-thin hover:bg-blue-700 border-2 border-amber-50 text-white mt-4 py-2 px-4 rounded-full'>More... </a> 
    </div>
    <div className=' fixed md:absolute right-1 bottom-1 text-gray-800 text-sm md:text-2xl flex items-center justify-between w-28 md:w-44 p-4 md:border-2 rounded-md border-slate-200'>
    
        <SlSocialLinkedin />
        <FaXTwitter />
        <FaInstagram />
      
    </div>
      
    </main>
    
  )
}

export default Hero

// https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png