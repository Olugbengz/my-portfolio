import React from 'react';
import Card from './Card';
import { projects } from '../project-data';


function Projects() {
  const cardDetails = projects.map((project) => {
    return (
      <Card 
          key={project.id}
          imgLink={project.imgLink}
          title={project.title}
          descr={project.descr}
          languages={project.languages.map((language) => {
            return (
            <div className=' text-amber-200 bg-blue-950 text-sm rounded-full px-2.5 py-1 m-auto'>
              {language}
            </div>
            )
          })}
          link={project.link}
      
      />
    )
  })
  return (
    <div id='projects' className='bg-slate-50 h-auto flex flex-col py-16 '>
       <div className='container grid md:grid-cols-3 gap-2 m-auto py-10 px-20 w-full'>
        {cardDetails}
     </div>
     <button className='italic antialiased font-medium text-xl border-4 px-3 py-1 mx-auto mb-20 w-[100px] rounded-full text-green-900' type='button'>More...</button>
    </div>
  )
}

export default Projects