import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className="bg-[#f4fafd] py-6 mt-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-bold mb-4">Skills</h1>
      <hr className="border-2 border-blue-500 w-[3.2rem] mb-4" />
      <p className="leading-7 mb-6">These are some of my skills and the respective level of proficiency</p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex-1">
          <Skill skillname="HTML" barrate={98} />
          <Skill skillname="JavaScript" barrate={80} />
          <Skill skillname="React JS" barrate={75} />
          <Skill skillname="WordPress" barrate={89} />
          <Skill skillname="GitHub" barrate={92} />
        </div>

        <div className="flex-1">
          <Skill skillname="CSS" barrate={97} />
          <Skill skillname="Tailwind CSS" barrate={90} />
          <Skill skillname="Git (Version Control)" barrate={87} />
          <Skill skillname="Photoshop" barrate={85} />
          <Skill skillname="SQL" barrate={79} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
