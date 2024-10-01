import damiplane from './pageassets/damiplane.jpg';
import Skills from './pagecomponents/Skills';

const About = () => {
  return (
    <div className="relative bg-white mt-12 ml-8 mb-4">
      <h1 className="text-[1.5rem] sm:text-[2rem] font-bold">About</h1>
      <hr className="border-2 border-blue-500 w-[3.2rem] mt-4" />
      <p className="mt-4 text-[0.9rem] sm:text-[1rem] leading-7">
        I am a frontend developer with over 6 years of experience working with web technologies such as HTML, CSS, JavaScript, WordPress, React, Tailwind CSS, and Git version control. My journey in tech has equipped me with a diverse set of skills, and I am proud to hold international certifications, including Oracle Database SQL Certified Expert (OCE), Adobe Certified Associate (ACA) in Web Communications using Adobe Dreamweaver, and several New Horizons certifications in Java, Comptia A+, and CCNA, among others.
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
        <div className="w-full sm:w-[20%]">
          <div className="w-full object-cover flex">
            <img src={damiplane} alt="Damilola Oni" className="w-[80%] h-auto" />
          </div>
        </div>
        <div className="w-full sm:w-[70%]">
          <h2 className="text-[1.2rem] sm:text-[1.4rem] font-bold">Technical Officer and Web Developer</h2>
          <p className="mt-4 leading-7">
            Professionally, I serve as the Technical Officer at Daily Post Media Ltd, where I continue to leverage my expertise in web technologies and contribute to the organization's digital initiatives.
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-8 mt-6">
            <div className="space-y-4">
              <h3><span className="font-bold">Birthday:</span> 6th April</h3>
              <h3><span className="font-bold">Website:</span> <a href="https://damilolaoni.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Damilola Oni Portfolio</a></h3>
              <h3><span className="font-bold">Phone:</span> +2348108648372</h3>
            </div>

            <div className="space-y-4">
              <h3><span className="font-bold">City:</span> Lagos, Nigeria</h3>
              <h3><span className="font-bold">Email:</span> damilolaoni07@gmail.com</h3>
              <h3><span className="font-bold">Freelance:</span> Available</h3>
            </div>
          </div>

        </div>
      </div>
          <p className="mt-7 leading-6">
            In addition to my technical qualifications, I have a passion for education. I’ve had the privilege of working as a tech instructor with both ICTInSchool Project and New Horizons. Currently, I run an online tech training school called Dev Essentials, where I focus on helping others build foundational skills in web development.
          </p>

      <Skills />
    </div>
  );
};

export default About;
