import React from 'react'

function About(prop) {
  return (
    <div id='about' className='bg-slate-100 h-auto flex py-auto'>
      <div className='container md:p-10 mx-auto w-3/4'>
      <div className='lg:grid grid-cols-3 gap-8 text-start my-12 items-center'>
      <div className="w-full col-span-1 mx-auto max-w-xs">
  
  <img  src='https://professions.ng/wp-content/uploads/2023/07/Building-a-Career-Computer-Programmer-in-Nigeria-Today.jpg' alt='Random Programer' />

</div>
        <div className='bg-gray-200 col-span-2 p-5 mt-4 mx-auto md:py-20 py-18'>
        <h1 className='text-xl font-semibold text-center border-b-2 border-slate-300 mb-4'>About Me</h1>

            <div className='flex flex-col gap-4 items-start px-4  text-sm text-gray-700 '>
                <p className='justify-start'>
                  <span className='block mb-2 font-medium'>Why Django:</span>

                  I have a project at heart which involves the integration of many apps. While 
                  thinking about this project, I thought of scalability, flexibility, ease of development 
                  within planned time, and security. My 5+ years of experience as a Research Analyst with 
                  Prescouter Inc. enabled me to dive into Django using research approach. This development 
                  experience in less than two years has been productive. It would be interesting to hear from 
                  you regarding your web app projects.

                </p>

                <p className='justify-start'>
                <span className='block mb-2 font-medium'>Frontend:</span>
                Trying to put my eye into presentation to, and collection of data from users, I found React with Tailwind 
                very helpful. I am looking forward to hearing about your front-end projects, which will not be a 
                challenge in the hands of a researcher and a web app developer like me.
                  </p>

                <p className='justify-start'>
                    Outside project development I study the Bible, read books, or play the bass guitar. 
                </p>
            </div>
        </div>
        
       
        
</div>
</div>
        </div>
  )
}

export default About