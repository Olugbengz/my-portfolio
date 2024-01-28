import React from 'react'

function About(prop) {
  return (
    <div id='about' className='bg-slate-50 h-screen flex py-auto'>
      <div className='container md:p-10 mx-auto h-[80vh]'>
      <div className='lg:grid grid-cols-2 gap-5 text-center mt-12 items-center'>
      <div className="w-full mt-8 mx-auto max-w-xs">
  
  <img  src='https://professions.ng/wp-content/uploads/2023/07/Building-a-Career-Computer-Programmer-in-Nigeria-Today.jpg' alt='Random Programer' />

</div>
        <div className='bg-gray-300 border border-lime-100 border-spacing-4 p-5 w-3/4 mx-auto md:py-20 py-18'>
        <h1 className='text-xl border-b-2 mb-8 border-spacing-12 border-slate-100'>Contact Me</h1>
            <span></span>
            <div>
                <p className=''>
                They understand the importance of responsive and dynamic interfaces, 
                ensuring that users have a delightful and engaging experience with
                 the applications they build.
                </p>
            </div>
        </div>
        
       
        
</div>
</div>
        </div>
  )
}

export default About