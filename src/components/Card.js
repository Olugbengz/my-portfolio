import React from 'react';
import profileImg from '../assets/personal.png';
import { IoGitBranch } from "react-icons/io5";

function Card({
    // project
}) {
  return (
    <div  className='w-[250px]  flex flex-col border-2 border-gray-300 shadow-md items-start justify-center rounded-lg'>
          <img className='w-full rounded-tl-lg rounded-tr-lg' src={profileImg} alt='Profile Image' />
            <h3 className='font-sans text-xl text-gray-900 font-bold p-2'>
                Title
                {/* {project.title} */}
            </h3>    

             <p className='font-san text-sm text-gray-600 font-normal p-2'>
             Lorem Ipsum has been the industry's standard, 
             when an unknown printer took a galley .... 
                {/* {project.description} */}
            </p>
        

        <div className='flex items-center gap-8 justify-between p-2'>
            <ul className='flex gap-2 items-center justify-center'>
                <li >HTML</li>
                <li>Tailwind</li>
                <li>React</li>
            </ul>
            <a className='flex items-end' href=''><IoGitBranch /></a>
        </div>

    </div>
  )
}

export default Card

// https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1707835447~exp=1707836047~hmac=7adcf9a5a72f13459050f71d55da04ad0d088ff7f2fff8e1519bfa4e28c397da'