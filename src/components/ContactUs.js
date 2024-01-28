import React from 'react'

function ContactUs(prop) {
  return (
    <div id='contact' className='bg-slate-50 h-screen flex py-auto '>
      <div className='container md:p-10 mx-auto h-[80vh]'>
      <div className='lg:grid grid-cols-2 gap-5 text-center mt-12 items-center'>
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
        
       
        <div className="w-full mt-8 mx-auto max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
  </form>
</div>
</div>
</div>
        </div>
   
  )
}

export default ContactUs