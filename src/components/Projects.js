import React from 'react';
import Card from './Card';


function Projects(prop) {
  
  return (
    <div id='projects' className='bg-slate-50 h-screen flex flex-col py-auto '>
       <div className='container md:grid grid-cols-4 m-auto py-12 px-20'>
        <Card />
        <Card />
        <Card />
        <Card />
     </div>
     <button className='bg-blue-700 text-xl px-4 py-2 mx-auto mb-20 w-[150px] rounded-lg text-white' type='button'>More</button>
    </div>
  )
}

export default Projects