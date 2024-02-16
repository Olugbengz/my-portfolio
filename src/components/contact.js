import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



export const Email = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'contact_service';
    const templateId = 'template_15faqon';
    const publicKey = 'wczJYxmQXLzoY7V8X';

 const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Olugbengz',
        message: message,
    };

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
// };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
      
          console.log('Email sent!', response.status, response.text);
         
          setName('');
          setEmail('');
          setMessage('');
      })
      // .then(data => console.log(data))
      .catch((error) => {
        console.error('Message not sent:', error);
      });
  };

  return (
     
    <form ref={form} onSubmit={sendEmail} className="bg-white w-full shadow-md rounded-lg px-12 pt-6 pb-8 mb-4">

        <h4 className='mb-4 text-gray-400 text-lg font-semibold'>Waiting to hear from you!</h4>

        {/* <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" /> */}
        <div className="mb-4">
      
       <input 
            type="text" 
            name='user_name'
            placeholder='Your Name'
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" 
        
        />
        </div>

        <div className="mb-3">

        <input 
            type="text" 
            placeholder='example@mail.com'
            name='user_email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email"
        />
       </div>
      
       <div className="mb-2">
      <textarea 
        placeholder="Message" 
        name='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message"
        />
        </div>
        <div className="flex items-center justify-between"> 
      <button 
         type="submit" 
         value="Send" 
         className="bg-blue-500 w-full hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         >Send Message</button>
         </div>
    </form>
  );
};