import React from 'react'
import Skill from './Skill'

const Skills = () => {
  return (
    <div className="skills  bg-[#faf4fd]">

        <h1 className="mt-12 ml-8 text-[2rem] font-bold">Skills</h1>
        <hr className="border-2 border-blue-500 w-[3.2rem] mt-4 ml-8"/>
        <p className="ml-8 my-3 leading-7">These are some of my skills</p>

        <Skill
        skillname = "HTML"
        barrate = {100}
        />
        <Skill
        skillname = "HTML"
        barrate = {20}
        />
    </div>
  )
}

export default Skills