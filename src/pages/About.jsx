import damiplane from './pageassets/damiplane.jpg'
import Skills from './pagecomponents/Skills'

const About = () => {
  return (
    <div className="relative w-[81.2vw] left-[21.5%]">
        <h1 className="mt-12 ml-8 text-[2rem] font-bold">About</h1>
        <hr className="border-2 border-blue-500 w-[3.2rem] mt-4 ml-8"/>
        <p className="ml-8 my-3 leading-7">I am a frontend developer with over 6 years of experience working with web technologies such as HTML, CSS, JavaScript, and WordPress, React, Tailwind CSS, and Git version control. My journey in tech has equipped me with a diverse set of skills, and I am proud to hold international certifications, including Oracle Database SQL Certified Expert (OCE), Adobe Certified Associate (ACA) in Web Communications using Adobe Dreamweaver, and several New Horizons certifications in Java, Comptia A+, and CCNA, among others.</p>

        <div className="photodetails ml-8 flex justify-start gap-8 mt-16">
          <div className="left w-[19rem] h-[21rem] border-2">
            <img src={damiplane} alt="Damilola Oni" className='w-full h-full object-cover' />
          </div>
          <div className="right">
            <h2 className="text-[1.4rem] font-bold">Technical Officer and Web Developer</h2>
            <p className="mt-4 w-[58rem] leading-7">Professionally, I serve as the Technical Officer at Daily Post Media Ltd, where I continue to leverage my expertise in web technologies and contribute to the organization's digital initiatives.</p>

            <div className="details flex justify-start items-center gap-8 mt-6 ">
              <div className="left-details space-y-4">
                <h3><span className="font-bold">Birthday:</span> 6th April</h3>
                <h3><span className="font-bold">Website:</span> https://vercel.com/damilola-onis-projects/standard-portfolio</h3>
                <h3><span className="font-bold">Phone:</span> +2348108648372</h3>
              </div>

              <div className="right-details space-y-4">
                <h3><span className="font-bold">City:</span> Lagos, Nigeria</h3>
                <h3><span className="font-bold">Email:</span> damilolaoni07@gmail.com</h3>
                <h3><span className="font-bold">Freelance:</span> Available</h3>
              </div>
            </div>

            <p className="mt-7 w-[58rem] leading-6">In addition to my technical qualifications, I have a passion for education. I’ve had the privilege of working as a tech instructor with both ICTInSchool Project and New Horizons. Currently, I run an online tech training school called Dev Essentials, where I focus on helping others build foundational skills in web development.</p>
          </div>
        </div>



        <Skills />
    </div>
  )
}

export default About