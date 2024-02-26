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
    <div className='bg-slate-100 hidden h-auto md:flex py-auto '>
        <div className='container m-auto py-12 px-20'>
          <div><h1 className='mb-4 text-2xl font-semibold'>Skills</h1></div>
      <div className='grid grid-rows-3 gap-8 pr-20'>
        {/* Backend Skills */}
          <div className='flex gap-5 items-center justify-between mb-8'>
              <div className='w-[500px] border-t-4 border-x-amber-900'>
                  <h4 className='pl-6 mt-8 text-2xl font-semibold'>Backend</h4>
              </div>
            <div  className='flex gap-5 items-center justify-between'>
                <div className='h-[75px] w-[75px] pt-3.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-teal-600'>
                  <TbBrandPython className='relative m-auto' />
                </div> 
                <div className='h-[75px] w-[75px] pt-3.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-teal-600'>
                  <TbBrandDjango className='relative m-auto' />
                </div>
                <div className='h-[75px] w-[75px] pt-3.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-teal-600'>
                  <BsDatabaseGear className='relative m-auto'/>
                </div>
            </div>
          </div>

    {/* Frontend Skills */}

      <div className='flex gap-5 items-center justify-between mb-8' >
        <div>
          <h4 className='pl-6 mt-2 text-2xl font-semibold'>Frontend</h4>
        </div>

        <div className='flex gap-5 items-center justify-between'>
        <div className='h-[75px] w-[75px] pt-3.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-teal-600'>
              <RiJavascriptLine  className='relative m-auto'/>
            </div>

          
              <div className='h-[75px] w-[75px] pt-3.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-teal-600'>
                <FaReact className='relative m-auto'/>
                
              </div>
              
            

            <div className='h-[75px] w-[75px] pt-3.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-teal-600'>
              <FaCss3 className='relative m-auto'/>
            </div>
            <div className='h-[75px] w-[75px] pt-3.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-teal-600'>
                <AiOutlineHtml5 className='relative m-auto'/>
            </div>
        </div>
      </div>

      {/* Data Science */}

      <div className='flex gap-5 items-center justify-between mb-8'>
          <div className='w-[500px] border-b-4 border-x-amber-900'>
            <h3 className='pl-6 mb-8 text-2xl font-semibold'>Scrapping/Data Science</h3>
          </div>

          <div className='flex gap-5 items-center justify-between'>
          
            <div className='h-[75px] w-[75px] pt-3.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-teal-600'>
              <SiSelenium className='relative m-auto'/>
            </div>

            <div className='h-[75px] w-[75px] pt-3.5 rounded-full text-4xl text-amber-200 bg-blue-950 border-2 border-teal-600'>
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