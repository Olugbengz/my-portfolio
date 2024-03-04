import React from 'react';
// import profileImg from '../assets/portfo.png';
import { IoGitBranch } from "react-icons/io5";


function Card(props) {
  return (
    <div  className='w-[300px]  flex flex-col border-2 border-gray-300 shadow-md items-start justify-center rounded-lg'>
          <img className='w-full max-h-[160px] rounded-tl-lg rounded-tr-lg' src={require(`../assets/${props.imgLink}`)} alt='Profile foto' />
            <h3 className='font-sans text-xl text-gray-900 font-bold p-2'>
            
                {props.title}
            </h3>    

             <p className='font-san text-sm text-gray-600 font-normal p-2'>
             
                {props.descr}
            </p>
        

        <div className=' flex items-center gap-8 justify-start ml-2 my-2'>
            
            <div className='flex gap-2'>{props.languages}</div>
                
                <a href={props.link} target='_blank' rel='noopener noreferrer' className='bg-green-900 inline-block italic antialiased font-light text-white text-lg cursor-pointer px-3.5 py-1.5 w-12 rounded-full'><IoGitBranch /></a>
        </div>
        

    </div>
  )
}

export default Card

// https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1707835447~exp=1707836047~hmac=7adcf9a5a72f13459050f71d55da04ad0d088ff7f2fff8e1519bfa4e28c397da'