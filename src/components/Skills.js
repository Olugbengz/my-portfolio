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
    <div className='bg-slate-50 h-screen flex py-auto '>
    <TbBrandPython />
    <TbBrandDjango />
    <RiJavascriptLine />
    <FaReact />
    <FaCss3 />
    <AiOutlineHtml5 />
    <GiPanda />
    <SiSelenium />
    <BsDatabaseGear />
  </div>
  )
}

export default Skills