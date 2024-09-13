import React from 'react'
import Skill from './Skill'

const Skills = () => {
  return (
    <div className="skills  bg-[#f4fafd] py-6 mt-32">

        <h1 className="mt-8 ml-8 text-[2rem] font-bold">Skills</h1>
        <hr className="border-2 border-blue-500 w-[3.2rem] mt-4 ml-8"/>
        <p className="ml-8 my-3 leading-7">These are some of my skills and the respective level of proficiency</p>

        <div className="skills flex justify-start gap-4 items-center">
            <div className="left w-[35rem]">
                <Skill
                skillname = "HTML"
                barrate = {98}
                />
                <Skill
                skillname = "Javascript"
                barrate = {80}
                />
                <Skill
                skillname = "React JS"
                barrate = {75}
                />
                <Skill
                skillname = "WordPress"
                barrate = {89}
                />
                <Skill
                skillname = "Github"
                barrate = {92}
                />
            </div>

            <div className="right w-[35rem]">
                <Skill
                skillname = "CSS"
                barrate = {97}
                />
                <Skill
                skillname = "Tailwind CSS"
                barrate = {90}
                />
                <Skill
                skillname = "Git (Version Control)"
                barrate = {87}
                />
                <Skill
                skillname = "Photoshop"
                barrate = {85}
                />
                <Skill
                skillname = "SQL"
                barrate = {79}
                />
            </div>
        </div>
    </div>
  )
}

export default Skills