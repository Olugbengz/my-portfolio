import React from 'react'
import { TbBrandPython } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { GiPanda } from "react-icons/gi";
import { SiSelenium } from "react-icons/si";
import { BsDatabaseGear } from "react-icons/bs";

function Skills() {
  return (
    <div className='bg-slate-100 hidden h-auto  md:flex py-auto '>
        <div className='container m-auto py-12 px-20'>
          <div><h1 className='mb-4 text-center text-2xl font-medium'>Skills</h1></div>
      <div className='grid grid-rows-3 gap-2 px-10'>
        {/* Backend Skills */}
          <div className='flex gap-2 items-center justify-between mb-6'>
              <div className=' border-t-4 border-x-amber-900'>
                  <h4 className='pl-6 mt-8 text-xl text-gray-700 font-medium'>Backend</h4>
              </div>
            <div  className='flex gap-2 items-center justify-between'>
                <div className='h-[75px] w-[75px] pt-2.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-red-900'>
                  <TbBrandPython className='relative m-auto' />
                </div> 
                <div className='h-[75px] w-[75px] pt-2.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-red-900'>
                  <TbBrandDjango className='relative m-auto' />
                </div>
                <div className='h-[75px] w-[75px] pt-2.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-red-900'>
                  <BsDatabaseGear className='relative m-auto'/>
                </div>
            </div>
          </div>

    {/* Frontend Skills */}

      <div className='flex gap-2 items-center justify-between mb-6' >
        <div>
          <h4 className='pl-6 mt-2 text-xl text-gray-700 font-medium'>Frontend</h4>
        </div>

        <div className='flex gap-2 items-center justify-between'>
        <div className='h-[75px] w-[75px] pt-2.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-red-900'>
              <RiJavascriptLine  className='relative m-auto'/>
            </div>

          
              <div className='h-[75px] w-[75px] pt-2.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-red-900'>
                <FaReact className='relative m-auto'/>
                
              </div>
              
            

            <div className='h-[75px] w-[75px] pt-2.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-red-900'>
              <FaCss3 className='relative m-auto'/>
            </div>
            <div className='h-[75px] w-[75px] pt-2.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-red-900'>
                <AiOutlineHtml5 className='relative m-auto'/>
            </div>
        </div>
      </div>

      {/* Data Science */}

      <div className='flex gap-2 items-center justify-between mb-6'>
          <div className='w-[500px] border-b-4 border-x-amber-900'>
            <h3 className='pl-6 mb-8 text-xl text-gray-700 font-medium'>Scrapping/Data Science</h3>
          </div>

          <div className='flex gap-2 items-center justify-between'>
          
            <div className='h-[75px] w-[75px] pt-2.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-red-900'>
              <SiSelenium className='relative m-auto'/>
            </div>

            <div className='h-[75px] w-[75px] pt-2.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-red-900'>
              <GiPanda className='relative m-auto'/>
            </div>           
            
           </div>
      </div>

    </div>    
    </div>           
        
  </div>
  )
}

export default Skills